// 4- Elabore um programa que leia um número. Calcule e informe o dobro desse número.

const prompt = require("prompt-sync")()

let num = parseFloat(prompt("Digite um número - "))
let dobro = num*2

console.log("O dobro de ",num," é ",dobro)