const pokemon = require('pokemon');
const pokemonlist = pokemon.all('ko');

let fs = require('fs');
const { error } = require('console');
console.log(pokemonlist[0]);

// console.log(pokemon.random('ko'));

// let HTMLLi = `<li>${pokemonlist[0]}</li>`

let list = [];
for(i=0; i<pokemonlist.length; i ++) {
  list[list.length] = `<li>${pokemonlist[i]}</li>`
} 
let doc =
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${list}
</body>
</html>`;
fs.writeFile('app.html',doc, function(err) {
  if(err) {
    new error("실패입니다")
}})


const http = require('http');

const server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end()
}).listen(5050)



