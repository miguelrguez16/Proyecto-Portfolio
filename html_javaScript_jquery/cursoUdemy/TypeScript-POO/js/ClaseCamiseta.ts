// Clases (modelo del objeto)
// propiedades del objeto
// funciones
interface CamisetaBase {
  setColor(newColor: string): void;
  getColor(): string;
}


// ! DECORDADOR
// Añade una funcionalidad a una clase
function estampar(logo: string){
  return function(target: Function){
    target.prototype.setEstampado = function():void{
      console.log("Camiseta estampada con el logo de: " + logo);
    }
  }
}

@estampar("LOS CHIKOS DEL MAIZ")
class Camiseta implements CamisetaBase {
  private _color: string;
  private _modelo: string;
  private _marca: string;
  private _talla: string;
  private _precio: number;
  constructor(
    color: string,
    modelo: string,
    marca: string,
    talla: string,
    precio: number
  ) {
    this._color = color;
    this._modelo = modelo;
    this._marca = marca;
    this._precio = precio;
    this._talla = talla;
  }
  getColor(): string {
    return this._color;
    throw new Error("Method not implemented.");
  }
  public setColor(newColor: string) {
    this._color = newColor;
  }
  public setModelo(newModelo: string) {
    this._modelo = newModelo;
  }
  public setMarca(newMarca: string) {
    this._marca = newMarca;
  }
  public setTalla(newTalla: string) {
    this._talla = newTalla;
  }
  public toString(): string {
    return "Camiseta de color" + this._color;
  }
}

class Sudadera extends Camiseta {
  constructor(
    color: string,
    modelo: string,
    marca: string,
    talla: string,
    precio: number,
    capucha: boolean
  ) {
    super(color,modelo, marca, talla, precio);
    this._capucha = capucha;
  }
  private _capucha: boolean;
  public setCapucha(capucha: boolean): void {
    this._capucha = capucha;
  }
  public getCapucha(): boolean {
    return this._capucha;
  }
}

var cami = new Camiseta("Rojo", "Nije", "Jike", "M", 34);
console.log(cami);
cami.setEstampado();
