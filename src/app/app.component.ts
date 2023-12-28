import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp';

  onSubmit(userDetails : NgForm){
    console.log("Form Submitited " + userDetails.value.fName + " " + userDetails.value.lName);

  }
}
