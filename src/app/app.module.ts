import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComunidadPage } from '../pages/comunidad/comunidad';
import { ComentariosPage } from '../pages/comentarios/comentarios';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { HorariosPage } from '../pages/horarios/horarios';
import { LoginPage } from '../pages/login/login';
import { MapaPage } from '../pages/mapa/mapa';
import { NoticiasPage } from '../pages/noticias/noticias';
import { MenuHomePage } from '../pages/adicionales/menu-home';
import { InfoUsuarioPage } from '../pages/info-usuario/info-usuario';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AutorizacionProvider } from '../providers/autorizacion/autorizacion';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { SQLite } from '@ionic-native/sqlite';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ComunidadPage,
    ComentariosPage,
    ConfiguracionPage,
    HorariosPage,
    LoginPage,
    MapaPage,
    NoticiasPage,
    MenuHomePage,
    InfoUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ComunidadPage,
    ComentariosPage,
    ConfiguracionPage,
    HorariosPage,
    LoginPage,
    MapaPage,
    NoticiasPage,
    MenuHomePage,
    InfoUsuarioPage
  ],
  providers: [
    GooglePlus,
    Facebook,
    SQLite,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutorizacionProvider,
    UsuarioProvider,
    BaseDatosProvider
  ]
})
export class AppModule {}
