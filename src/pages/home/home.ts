import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { MenuHomePage } from '../../pages/adicionales/menu-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
  }

  AbrirMenuSuperior(evento) {
    let popover = this.popoverCtrl.create(MenuHomePage);
    popover.present({ ev: evento });
  }

}
