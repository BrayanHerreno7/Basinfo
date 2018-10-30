import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import firebase from 'firebase/app';

import { webClientId } from '../../environment/constantes';

/*
  Generated class for the AutorizacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AutorizacionProvider {

  constructor(private googlePlus: GooglePlus, private facebook:Facebook) {
  }

  googleLogin() {
    return Observable.create(observer => {
      return this.googlePlus.login({
        'webClientId': webClientId,
        'scopes': 'profile email',
      })
      .then( res => {
        const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        firebase.auth().signInWithCredential(firecreds)
        .then( success => { observer.next(success); })
        .catch(error => {
          observer.error('googleLogin: ', error);
        });
      });
    })
  }

  facebookLogin(): Promise<any> {
    return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
      }).catch((error) => { console.log('facebookLogin: ',error) });
  }

  Logout(){
    firebase.auth().signOut().then(function() {
    }, function(error) {
      console.log('Logout: ',error);
    });
  }
}
