import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoUsuarioPage } from './info-usuario';

@NgModule({
  declarations: [
    InfoUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoUsuarioPage),
  ],
})
export class InfoUsuarioPageModule {}
