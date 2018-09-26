import { Injectable } from '@angular/core';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {
  private _iud:string;
  private _nombre:string;
  private _correo:string;

  constructor() {
  }

  set(uid:string, nombre:string, correo:string){
    this._iud = uid;
    this._nombre = nombre;
    this._correo = correo;
  }
  
  public get uid() : string {
    return this._iud;
  }
  public get nombre() : string {
    return this._nombre;
  }
  public get correo() : string {
    return this._correo;
  }

}
