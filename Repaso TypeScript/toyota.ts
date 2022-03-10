import { Coche } from "./coche";

export class Toyota extends Coche{
    public _electrico:boolean;

    constructor(){
        super();
        this._modelo = "Toyota";
        this._electrico = false;
    }


}
var t = new Toyota();
console.log(t.toString());