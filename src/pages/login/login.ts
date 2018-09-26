import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


import { GooglePlus } from '@ionic-native/google-plus';

import { AutorizacionProvider } from './../../providers/autorizacion/autorizacion';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [GooglePlus],
})
export class LoginPage {

  constructor(private authProvider: AutorizacionProvider) {
  }

  loginWithGoogle(): void{
    this.authProvider.googleLogin().subscribe(() => {
    }, err =>{
      console.log(err);
    });  
  }

  loginWithFacebook(): void{
    this.authProvider.facebookLogin()
    .then(() => {
    }, err =>{
      console.log(err);
    });  
  }
}
