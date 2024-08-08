
// import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics";
// import { Hero, Villian } from "./interfaces";


// printObject(123)
// printObject(new Date())
// printObject({a:1, b:2, c:3})
// printObject([1,2,3,4,5,6,7,8,9])
// printObject('Hola Mundo')

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Cristhian').toUpperCase());
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow('Cristhian').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());


// const deadpool = {
//     name: 'Deadpool',
//     realName: 'Wade Wilson',
//     dangerLevel: 130
// }

// console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);

//? ------------------

// import { getPokemon } from './generics/get-pokemon';


// getPokemon(4)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Fin de getPokemon'))