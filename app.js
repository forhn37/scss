// pokemon 모듈 불러오기
const pokemon = require('pokemon');
// pokemonlist 변수로 선언하기
const pokemonlist = pokemon.all('ko');
// 파일 시스템 불러오기
let fs = require('fs');
// const { error } = require('console');
// console.log(pokemonlist[0]);

// console.log(pokemon.random('ko'));

// let HTMLLi = `<li>${pokemonlist[0]}</li>`
// list 배열만들어서 여기에 for문으로 
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
<style>

</style>
</html>`;

fs.writeFile('app.html',doc, function(err) {
  if(err) {
    new error("실패입니다")
}})


const http = require('http');

const server = http.createServer(function(request, response) {

  fs.readFile("app.html",function(err, data) {
    if(err) {
      console.err('에러입니다');
    } else {
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(data);
    }
  }
  )
}
).listen(5050);