import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

import firebase from 'firebase';
import { snapshotToArray } from '../../environment/constantes'

import { UsuarioProvider } from './../../providers/usuario/usuario';

/**
 * Generated class for the ComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {
  @ViewChild(Content) content: Content;
  datos = { uid:this.usuario.uid, usuario:this.usuario.nombre, mensaje:'' };
  comentarios = [];
  usuarioActual = '';
  blogKey:string;
  tituloBlog:string;
  offStatus:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuario: UsuarioProvider) {
    this.blogKey = this.navParams.get("key") as string;
    this.tituloBlog = this.navParams.get("titulo") as string;
    this.usuarioActual = this.usuario.uid;
    this.datos.mensaje = '';
  
    firebase.database().ref('tablas/blogs/'+this.blogKey+'/comentarios').on('value', resp => {
      this.comentarios = [];
      this.comentarios = snapshotToArray(resp);
      if(this.offStatus === false) {
        setTimeout(() => {
          this.content.scrollToBottom(300);
        }, 1000);
      }
    });
  }

  sendMessage() {
    let newData = firebase.database().ref('tablas/blogs/'+this.blogKey+'/comentarios').push();
    newData.set({
      uid:this.datos.uid,
      usuario:this.datos.usuario,
      mensaje:this.datos.mensaje,
      fecha:Date()
    });
    this.datos.mensaje = '';
  }

  ionViewDidLeave(){
    this.offStatus = true;
  }

}
