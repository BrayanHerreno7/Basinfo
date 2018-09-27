export class Mensaje {
  private _id:number;
  private _texto:string;
  private _creador:number;

  constructor(id:number, texto:string, creador:number) {
    this._id = id;
    this._texto = texto;
    this._creador = creador;
  }
  
  public get id() :number {
    return this._id;
  }
  public get texto() :string {
    return this._texto;
  }
  public get creador() :number {
    return this._creador;
  }
}