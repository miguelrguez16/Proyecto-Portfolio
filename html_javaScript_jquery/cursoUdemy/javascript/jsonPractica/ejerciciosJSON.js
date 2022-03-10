"use strict";

/**
 * *Ejercicios Nivel 1
 * Cambiar el array de habilidades a JSON usando JSON.stringify()
 * Stringify la variable de edad
 * Stringify la variable isMarried
 * Stringify el objeto estudiante
 * * Ejercicios Nivel 2
 * Stringify el objeto estudiante con sólo las propiedades firstName, lastName y skills
 **Ejercicios Nivel 3
 * Parsear el txt JSON a objeto.
 * Encontrar el usuario que tiene muchas habilidades de la variable almacenada en txt.
 */

 /* DATOS */
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
console.log(skills.length);
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

/**
 * * Ejercicio 1: Cambiar el array de habilidades a JSON usando JSON.stringify()
 */
var habilidades = JSON.stringify(skills);
console.log(typeof habilidades + ":" + habilidades);
// * Stringify la variable edad
var edad = JSON.stringify(age);
console.log(typeof edad + ":" + edad);
//  * Stringify la variable isMarried
var casado = JSON.stringify(isMarried);
console.log(typeof casado + ":" + casado);
//* Stringify el objeto estudiante
var estudiante = JSON.stringify(student);
console.log(typeof estudiante + ":" + estudiante);

/**
 *  * Ejercicio 2: Stringify el objeto estudiante con solo las propiedas firstName, lastName  y skils
 */
// * se pueden pasar las varibles clave para que solo pase a JSON las que queremos
var estudiante2 = JSON.stringify(student, ["firstName", "lastName", "skills"]);
console.log(typeof estudiante2 + ": " + estudiante2);

/**
 * *  Ejercicio 3: Parsear el txt JSON a objeto.
 */
var nuevoJSON = JSON.parse(txt);
console.table(nuevoJSON);
// *  Encontrar el usuario que tiene muchas habilidades de la variable almacenada en txt.
console.log("Tipo de skills " + typeof skills);
var nombre ="";
var skillsTMP =[];
for (const index in nuevoJSON) {
    //debugger;
    if (nombre.length == 0){
        nombre = index;
        skillsTMP = nuevoJSON[index].skills;
    }else{
        if(skillsTMP.length < nuevoJSON[index].skills.length){
            nombre = index;
            skillsTMP = nuevoJSON[index].skills;
        }
    }
    
}
console.log(nombre, skillsTMP);