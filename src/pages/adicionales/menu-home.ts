
import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

import { InfoUsuarioPage } from '../../pages/info-usuario/info-usuario';

@Component({
  template: 
  `<ion-list>
      <button ion-item (click)="mostrarInfoUsuario()"><ion-icon name="person"></ion-icon> Usuario</button>
    </ion-list>`
})

export class MenuHomePage {

  constructor (private viewCtrl: ViewController, private navCtrl: NavController) {
  }

  mostrarInfoUsuario() {
  this.navCtrl.push(InfoUsuarioPage);
  this.viewCtrl.dismiss();
  }

}