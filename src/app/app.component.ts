import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComunidadPage } from '../pages/comunidad/comunidad';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { HorariosPage } from '../pages/horarios/horarios';
import { LoginPage } from '../pages/login/login';
import { MapaPage } from '../pages/mapa/mapa';
import { NoticiasPage } from '../pages/noticias/noticias';

import firebase from 'firebase';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';

var firebaseConfig = {  //Se encuentra al agregar una página Web en firebase
  apiKey: "AIzaSyAhYKqLAjnjmzTuaz3MGC55-13WK-SkWBI",
  authDomain: "basinfo-552d3.firebaseapp.com",
  databaseURL: "https://basinfo-552d3.firebaseio.com",
  projectId: "basinfo-552d3",
  storageBucket: "basinfo-552d3.appspot.com",
  messagingSenderId: "889566051333"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private usuario: UsuarioProvider, private bdProvider: BaseDatosProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Comunidad', component: ComunidadPage },
      { title: 'configuracion', component: ConfiguracionPage },
      { title: 'horarios', component: HorariosPage },
      { title: 'login', component: LoginPage },
      { title: 'mapa', component: MapaPage },
      { title: 'noticias', component: NoticiasPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      firebase.initializeApp(firebaseConfig);
      this.bdProvider.CrearBD()
      .then(() =>{
        this.bdProvider.ObtenerUsuarioActivo()
        .then(() =>{
          if (this.usuario.uid == null) {
            this.rootPage = LoginPage;
          } else{
            this.rootPage = HomePage;
            this.splashScreen.hide();
          }
        })
      })
      .catch(error =>{ 
        console.error('initializeApp: ', error);
      });
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.usuario.set(user.uid, user.displayName, user.email);
          this.bdProvider.CrearUsuario();
          this.rootPage = HomePage;
        }
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
