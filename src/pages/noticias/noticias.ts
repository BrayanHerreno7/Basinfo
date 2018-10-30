import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from  '../../providers/rest/rest';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  notices: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getNotices();
  }

  ionViewDidLoad() {
  } 

  getNotices() {
    this.restProvider.getNotices()
    .then(data => {
      this.notices = data;
      console.log(this.notices);
    });
  }

  
  
}
