import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userDetails') userDetailsForm! : NgForm
  user: User = {};
  dept : string[] =["Sales","IT"];
  prizes: string[]=["Voucher","Gift Card"];
  selectedPrize: string = "";

  constructor(){
    this.user = new User();
    this.selectedPrize = this.prizes[0];
  }

  onSubmit(userDetails : User){
    console.log(this.userDetailsForm.value);
  }
  //suggestEmail(event :any){
    //this.userDetailsForm.form.patchValue();
  //}
}
