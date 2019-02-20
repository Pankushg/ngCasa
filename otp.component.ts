import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  phone=1234567890;
  otpForm = new FormGroup({
    otp : new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log('qwerty')
  }
}
