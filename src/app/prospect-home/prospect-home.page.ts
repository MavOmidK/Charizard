import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Prospect } from '../prospect';
import { Team } from '../team';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { async, waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-prospect-home',
  templateUrl: './prospect-home.page.html',
  styleUrls: ['./prospect-home.page.scss'],
})
export class ProspectHomePage implements OnInit {

  prospects: Prospect[] = [];
  teams: Team[] = [];

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) {}

  ngOnInit() {
    this.getTeamsAndProspects();
  }

  async getProspects() {

    await this.api.getProspects().subscribe(res => {
      res = this.CalculateRemainingGames(res);
      this.prospects = res;
      console.log(this.prospects);
    }, err => {
      console.log(err);
    });
  }

  async getTeams(){
    await this.api.getTeams().subscribe(res => {
      this.teams = res;
      console.log(this.teams);
    }, err => {console.log(err);
    });
  }

  async getTeamsAndProspects(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });

    await loading.present();

    this.getTeams();
    this.getProspects();

    loading.dismiss();

  }


  CalculateRemainingGames(res: Prospect[]){

    for(let r of res){
      r.pros_gamesRemaining = 82 - r.pros_gamesPlayed;
    }

    return res;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.prospects, event.previousIndex, event.currentIndex);
  }
}
