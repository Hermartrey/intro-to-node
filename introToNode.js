//const fs = require('fs');

//fs.copyFileSync('source.txt', 'destination.txt');

const supervillains = require('supervillains');
var superheroes = require('superheroes');
var superVillains = supervillains.random();
var superVillainsList = supervillains.all;
var superHeroList = superheroes.all;

var superHeroNames = superheroes.random();


console.log(superHeroList);
console.log(superHeroNames);
console.log(superVillains);
console.log(superVillainsList);



