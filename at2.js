/*
2- Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” 
*/

const prompt = require("prompt-sync")()

let vel_permitida = parseFloat(prompt("Informe a velocidade permitida da estrada - "));
let vel_condutor = parseFloat(prompt("Informe a velocidade do condutor - "));

if(vel_condutor > vel_permitida && vel_condutor <= vel_permitida+(vel_permitida*20)/100){
    console.log("Multa leve")
}
else if(vel_condutor <= vel_permitida){
    console.log("Sem multa")
}
else if(vel_condutor > vel_permitida+(vel_permitida*20)/100){
    console.log("Multa grave")
}