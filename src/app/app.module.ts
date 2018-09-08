import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComunidadPage } from '../pages/comunidad/comunidad';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { HorariosPage } from '../pages/horarios/horarios';
import { LoginPage } from '../pages/login/login';
import { MapaPage } from '../pages/mapa/mapa';
import { NoticiasPage } from '../pages/noticias/noticias';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ComunidadPage,
    ConfiguracionPage,
    HorariosPage,
    LoginPage,
    MapaPage,
    NoticiasPage
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
    ConfiguracionPage,
    HorariosPage,
    LoginPage,
    MapaPage,
    NoticiasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
