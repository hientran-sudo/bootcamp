import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp';
  user: User = {};

  constructor(){
    this.user = new User();
  }

  onSubmit(userDetails : User){
    console.log(userDetails);

  }
}
