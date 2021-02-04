import { Component, OnInit } from '@angular/core';

import {SocialLoginModule , SocialAuthServiceConfig , GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'gapiexample',
  templateUrl: './gapiexample.component.html',
  styleUrls: ['./gapiexample.component.css']
})

export class GapiexampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signin() : void
  {
    console.log("I work");
  }

  signOut() : void
  {
    console.log("Hope to see u back :D");
  }

}
