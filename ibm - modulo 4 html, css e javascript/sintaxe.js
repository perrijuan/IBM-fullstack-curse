//entrada
console.log("ola mundo");

//definições de variaveis
let num = 212
var mystr = "juan"
console.log(mystr)
console.log(num)

//constantes
const pi_val = 3.147
console.log(pi_val)

//funcoes

function saida(user_input){
    console.log(user_input)
}

saida(9)
saida("c++ é melhor que python")

//abordagem de ES6

let saidaES6 = (user_input)=>{
    console.log(user_input)

}

saidaES6("assembly e melhor que algol 68")
saida(69)

//escopo de forma linear
let printMyInputES6Short = user_input => console.log(user_input)

printMyInputES6Short(9)
printMyInputES6Short("John")


//exemplos matematicos

console.log("5 + 3 = ", 5 + 3)
console.log("7 - 3 = ", 7 - 3)
console.log("8 * 2 = ", 8 * 2)
console.log("27 / 3 = ", 27 / 3)
console.log("4 to the power of 3 = ", 4 ** 3)
console.log("19 mod 4 = ", 19 % 4)

console.log("5 + 3 = ", 5 + 3)
console.log("5 + \"3\" = ", 5 + "3")
console.log("5 + 5 + \"3\" = ", 5 + 5 + "3")
console.log("\"3\" + 5 + 5 = ", "3" + 5 + 5)
console.log("5 + 5 + \"3\" + 5 = ", 5 + 5 + "3" + 5)

x = 5
console.log("Old value of x: ", x)
x += 3
console.log("New value of x: ", x)

y = 5
console.log("Old value of y: ", y)
y -= 3
console.log("New value of y: ", y)

a = 6
console.log("Old value of a: ", a)
a *= 3
console.log("New value of a: ", a)

b = 6
console.log("Old value of b: ", b)
b /= 3
console.log("New value of b: ", b)

c = 6
console.log("Old value of c: ", c)
c %= 3
console.log("New value of c: ", c)

d = 6
console.log("Old value of d: ", d)
d **= 3
console.log("New value of d: ", d)



//operadores de comparação

//Checking equality of 5 (number type) and 5 (string type)
console.log("5=='5' ", 5=='5')
console.log("5==='5' ", 5==='5')
console.log("5===5 ", 5===5)

console.log("5 != 5 ", 5 !== 5)
console.log("5 != 6 ", 5 != 6)
console.log("5 != '5' ", 5 !== '5')

console.log("5 > 2 ", 5 > 2)
console.log("5 > 7 ", 5 > 7)
console.log("5 > 5 ", 5 > 5)

console.log("5 < 7 ", 5 < 7)
console.log("5 < 2 ", 5 < 2)
console.log("5 < 5 ", 5 < 5)

console.log("5 >= 5 ", 5 >= 5 )
console.log("5 <= 5 ", 5 <= 5 )

//operadores logicos


var raining = false
var cloudy = true

console.log("It is raining: ", raining)
console.log("It is cloudy: ", cloudy)

console.log("It is raining AND cloudy: ", raining && cloudy)
console.log("It is raining OR cloudy: ", raining || cloudy)
console.log("It is not raining: ", !raining)
console.log("It is not cloudy: ", !cloudy)

//avaliacpção de curto circuito

var chocolate = true
var candy = false

console.log("There is chocolate: ", chocolate)
console.log("There is candy: ", candy)

console.log("There is candy AND chocolate: ", chocolate && candy, " -- Only candy is evaluated")
console.log("There is chocolate OR candy: ", chocolate || candy, " -- Only chocolate is evaluated")



//estrutura de decisao e estrutura de repetição


//estrutura de decisao while

//The code below is to find the length of the words the user is entering. The loop will go on and on until the user chooses not to continue by pressing 'n'



//estrutura de colecao vetores

let frutas = ["banana", "maça", "pera", "uva", "morango"]
console.log(frutas)
console.log(frutas[4])
console.log(frutas.length)

//para fazer a interação no loop

frutas.forEach(fruta => {
    console.log(fruta)
})

//podemos usar o metodo generics para achar o objeto de coleção
let myArray = ["Jack","Jill",4,5,true,"John"]
for (const [index, value] of Object.entries(myArray)) {
    console.log(index, " - ", value);
}


//mapas e arvores binarias
let myMap = new Map();

//Add a key-value pair to the map, with a key of "name" and a value of "John".
myMap.set("name", "John")

//Add another key-value pair to the map, with a key of "age" and a value of 22.
myMap.set("age", 22)

myMap.forEach((val,key) => {
    console.log(key, " - ", val)
})

