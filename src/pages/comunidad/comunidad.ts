import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ToastController } from 'ionic-angular';

import firebase from 'firebase/app';
import { snapshotToArray } from '../../environment/constantes'

import { UsuarioProvider } from './../../providers/usuario/usuario';
import { ComentariosPage } from '../comentarios/comentarios';

/**
 * Generated class for the ComunidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comunidad',
  templateUrl: 'comunidad.html',
})
export class ComunidadPage {
  blogs = [];

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private toastCtrl: ToastController, private usuario: UsuarioProvider) {
    firebase.database().ref('tablas/blogs/').on('value', resp => {
      this.blogs = [];
      this.blogs = snapshotToArray(resp);
    });
  }

  nuevoBlog(){
    let alert = this.alertCtrl.create({
      title: 'Crear blog',
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Titulo del blog'
        }
      ],
      
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Crear',
          handler: (data)=>{
            if (data.titulo != '') {
              let nuevoBlog = firebase.database().ref('tablas/blogs').push();
              nuevoBlog.set({
                usuario_creador: this.usuario.nombre,
                correo_usuario: this.usuario.correo,
                titulo: data.titulo,
                fecha: Date()
              });
            } else{
              let toast = this.toastCtrl.create({
                message: 'El título no puede ser vacío',
                duration: 2000,
                position: 'middle'
              });
              toast.present();
              return false;
            }
          }
        }
      ],
      cssClass: 'customAlert'
    });
    alert.present();
  }

  abrirBlog(key, titulo) {
    this.navCtrl.push(ComentariosPage, {key:key, titulo:titulo});
  }

}