import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    phone : new FormControl('',[Validators.required,Validators.pattern('[1-9][0-9]*'),Validators.minLength(10), Validators.maxLength(10)]),
  });
  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm)
  }

}
