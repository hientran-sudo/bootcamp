import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  userDetails! : FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.userDetails = new FormGroup({
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
    })
  }
  onSubmit (){
    console.log(this.userDetails.value)
  }

}
