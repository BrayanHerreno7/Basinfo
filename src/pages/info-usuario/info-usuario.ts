import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
import { AutorizacionProvider } from './../../providers/autorizacion/autorizacion';
import { UsuarioProvider } from './../../providers/usuario/usuario';

/**
 * Generated class for the InfoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-usuario',
  templateUrl: 'info-usuario.html',
})
export class InfoUsuarioPage {
  uid:string;
  nombre:string;
  correo:string;

  constructor(private autorizaProvider: AutorizacionProvider, private usuario: UsuarioProvider, private bdProvider: BaseDatosProvider) {
    this.uid = this.usuario.uid;
    this.nombre = this.usuario.nombre;
    this.correo = this.usuario.correo;
  }

  Logout(){
    this.autorizaProvider.Logout();
    this.bdProvider.BorrarUsuario()
    .then(() => {
      window.location.reload();
    })
  }

}
