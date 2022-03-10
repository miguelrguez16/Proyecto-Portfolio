export class Coche implements CocheBase{
  public _color: string;
  public _modelo: string;
  public _velocidad: number;

  constructor() {
      this._color="gris";
      this._modelo="_";
      this._velocidad = 0;
  }
  


  public getColor(): string {
    return this._color;
  }
  public getModelo(): string {
    return this._modelo;
  }
  public getVelocidad(): number {
    return this._velocidad;
  }

  public setColor(color: string) {
    this._color = color;
  }
  public setModelo(modelo: string) {
    this._modelo = modelo;
  }
  public setVelocidad(velocidad: number) {
    this._velocidad = velocidad;
  }

  public toString(): string {
    return "Coche " + this.getModelo() + "(" + this.getColor + ")";
  }

  public acelerar() {
    this._velocidad++;
  }
  public frenar() {
    if (this._velocidad >0) this._velocidad--;
  }
}
