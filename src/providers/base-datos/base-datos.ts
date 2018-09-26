import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { UsuarioProvider } from '../../providers/usuario/usuario';
/*
  Generated class for the BaseDatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseDatosProvider {
  private basedatos: SQLiteObject;

  constructor(private sqlite: SQLite, private usuario: UsuarioProvider) {
  }

  public CrearBD() {
    return this.sqlite.create({
      name: 'basinfo.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.basedatos = db;
        this.CrearTablas();
      })
  }

  private EjecutarQuery(sql: string, parametros = []) {
    return this.basedatos.executeSql(sql, parametros)
    .then(respuesta => {
      let arreglo = [];
      for (let index = 0; index < respuesta.rows.length; index++) {
        arreglo.push(respuesta.rows.item(index));
      }
      return Promise.resolve(arreglo);
    })
    .catch((error) => console.log('EjecutarQuery: ' + sql, error));
  }

  private EjecutarNonQuery(sql: string, parametros: any) {
    return this.basedatos.executeSql(sql, parametros)
      .catch((error) => console.log('EjecutarNonQuery: ' + sql, error));
  }

  private CrearTablas() {
    this.EjecutarNonQuery(
      `CREATE TABLE IF NOT EXISTS USUARIO(
      uid TEXT PRIMARY KEY,
      nombre TEXT,
      email TEXT)`, [])
      .catch((err) => console.log('CrearTablas: ', err));
  }

  public CrearUsuario() {
    this.BorrarUsuario()
    .then(() => {
      let sql = 'INSERT INTO USUARIO(uid, nombre, email) VALUES(?,?,?)';
      this.EjecutarNonQuery(sql, [this.usuario.uid, this.usuario.nombre, this.usuario.correo]);
    })
    .catch((error) => console.log('EjecutarQuery: ', error));
  }

  public BorrarUsuario() {
    let sql = 'DELETE FROM USUARIO';
    return this.EjecutarNonQuery(sql, []);
  }

  public ObtenerUsuarioActivo(){
    let datos;
    let sql = 'SELECT * FROM USUARIO LIMIT 1';

    return this.EjecutarQuery(sql)
    .then(data => {
      datos = datos = datos = data==null ? [] : data;
      for (let key in datos) {
        this.usuario.set(data[key].uid, data[key].nombre, data[key].email);
      }
    })
    .catch((err) => console.log('ObtenerUsuarioActivo: ', err));
  }

}
