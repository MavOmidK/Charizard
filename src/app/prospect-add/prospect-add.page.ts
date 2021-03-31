import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-prospect-add',
  templateUrl: './prospect-add.page.html',
  styleUrls: ['./prospect-add.page.scss'],
})
export class ProspectAddPage implements OnInit {

  console: Console;
  matcher = new MyErrorStateMatcher();
  prospectForm: FormGroup;
  pros_fullName = '';
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api:ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.prospectForm = this.formBuilder.group({
      'pros_fullName' : [null, Validators.required],
      'pros_owner' : [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;

    console.log("On Click Submit");
    console.log(this.prospectForm.value["pros_fullName"]);

    // this.isLoadingResults = false;

    this.api.addProspect(this.prospectForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/prospect-home']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });

  }
}
