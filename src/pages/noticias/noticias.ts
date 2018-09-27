import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HttpClient  } from '@angular/common/http';

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

  public noticias1:boolean = true;
  public posts:any;
  public http: HttpClient;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('Welcome to ionViewDidLoad NoticiasPage');
    /**
     * loading para cargar toda la vista
     */
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    //#tContainer102 > p > a
  }

  public open(item) {
    this.noticias1 = false;
    console.log(this.noticias1);
    this.get_page(item);
  }

  public get_page(item){
    /*this.posts = this.http.get('https://electronjs.org/docs/api/auto-updater#windows');
    console.log("RESULTADO DATOS: "+ item);
    console.log(this.posts);*/
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      console.log(this.responseXML.title);
    }
    xhr.open("GET", "https://electronjs.org/docs/api/auto-updater#windows");
    xhr.responseType = "document";
    xhr.send();
    console.log(xhr.response);
  }
  
}
