import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    transform(value: number, valueTwo: number) {
        let operaciones = `
        Suma: ${value + valueTwo}
        resta  ${value - valueTwo}
        multiplicacion:  ${value * valueTwo}
        division: ${value / valueTwo}
        `;
        return operaciones;
    }
    
}