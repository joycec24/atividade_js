/*3- Elabore um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes). */

const prompt = require("prompt-sync")()

let lado1 = parseFloat(prompt("Digite o valor do lado 1: "))
let lado2 = parseFloat(prompt("Digite o valor do lado 2: "))
let lado3 = parseFloat(prompt("Digite o valor do lado 3: "))

if(lado1,lado2,lado3 > lado1+lado2+lado3){
    console.log("Os lados informados não podem formar um triângulo.")
}
else if(lado1!=lado2 && lado2!=lado3 && lado3!=lado1){
    console.log("Os lados formam um triângulo escaleno")
}
else if(lado1==lado2 && lado2==lado3){
    console.log("Os lados formam um triângulo equilátero")
}
else{
    console.log("Os lados formam um triângulo isóceles")
}