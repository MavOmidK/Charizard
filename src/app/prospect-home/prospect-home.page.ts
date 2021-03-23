import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Prospect } from '../prospect';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { async, waitForAsync } from '@angular/core/testing';


@Component({
  selector: 'app-prospect-home',
  templateUrl: './prospect-home.page.html',
  styleUrls: ['./prospect-home.page.scss'],
})
export class ProspectHomePage implements OnInit {

  prospects: Prospect[] = [];

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) {}

  ngOnInit() {
    this.getProspects();
  }

  async getProspects() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getProspects().subscribe(res => {
      this.prospects = res;
      console.log(this.prospects);
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.prospects, event.previousIndex, event.currentIndex);
  }
}
