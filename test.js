var boton = document.querySelectorAll('button');
var segmento1 = document.getElementById('segmento1');
var segmento2 = document.getElementById('segmento2');
const igual = document.getElementById('b20');

const arreglo = new Array;
const nuevoArreglo = new Array;

 function returnValue(button){
    arreglo.push(button.value);
    cadena = arreglo.join('');
    segmento1.textContent = cadena;
    var numero = parseInt(cadena,10);
}
const clear = document.getElementById('b1');
clear.addEventListener('click', function(){
    segmento1.textContent = ''
    segmento2.textContent = ''
    arreglo.splice(0, arreglo.length)
    nuevoArreglo.splice(0, nuevoArreglo.length);
});
const back = document.getElementById('b17');
back.addEventListener('click', function(){
    var l = arreglo.length;
    arreglo.splice(l-1, l);
    segmento1.textContent = arreglo.join('');
});

function suma(arreglo){
    segmento1.textContent = cadena + ' +';
    for (let index = 0; index < arreglo.length; index++) {
        nuevoArreglo[index] = arreglo[index]; 
    }
    arreglo.splice(0, arreglo.length);
    igual.addEventListener('click', function(){
        var cadena1 = arreglo.join('');
        var cadena2 = nuevoArreglo.join('');
        var numero1 = parseInt(cadena1,10);
        var numero2 = parseInt(cadena2,10);
        segmento2.textContent = numero1 + numero2;
        
    });
}
function multiplicacion(arreglo){
    segmento1.textContent = cadena + ' X';
    for (let index = 0; index < arreglo.length; index++) {
        nuevoArreglo[index] = arreglo[index]; 
    }
    arreglo.splice(0, arreglo.length);
    igual.addEventListener('click', function(){
        var cadena1 = arreglo.join('');
        var cadena2 = nuevoArreglo.join('');
        var numero1 = parseInt(cadena1,10);
        var numero2 = parseInt(cadena2,10);
        segmento2.textContent = numero1 * numero2;
    });
}
function resta(arreglo){
    segmento1.textContent = cadena + ' -';
    for (let index = 0; index < arreglo.length; index++) {
        nuevoArreglo[index] = arreglo[index]; 
    }
    arreglo.splice(0, arreglo.length);
    igual.addEventListener('click', function(){
        var cadena1 = arreglo.join('');
        var cadena2 = nuevoArreglo.join('');
        var numero1 = parseInt(cadena1,10);
        var numero2 = parseInt(cadena2,10);
        segmento2.textContent = numero2 - numero1  ;
    });
}
function division(arreglo){
    segmento1.textContent = cadena + ' /';
    for (let index = 0; index < arreglo.length; index++) {
        nuevoArreglo[index] = arreglo[index]; 
    }
    arreglo.splice(0, arreglo.length);
    igual.addEventListener('click', function(){
        var cadena1 = arreglo.join('');
        var cadena2 = nuevoArreglo.join('');
        var numero1 = parseInt(cadena1,10);
        var numero2 = parseInt(cadena2,10);
        segmento2.textContent = numero2 / numero1  ;
    });
}
function porcentaje(arreglo){
    segmento1.textContent = cadena + ' %';
    for (let index = 0; index < arreglo.length; index++) {
        nuevoArreglo[index] = arreglo[index]; 
    }
    arreglo.splice(0, arreglo.length);
    igual.addEventListener('click', function(){
        var cadena1 = arreglo.join('');
        var cadena2 = nuevoArreglo.join('');
        var numero1 = parseInt(cadena1,10);
        var numero2 = parseInt(cadena2,10);
        segmento2.textContent = (numero2 * numero1)/100;
    });
}
function potencia(arreglo){
    segmento1.textContent = cadena + ' ^';
    for (let index = 0; index < arreglo.length; index++) {
        nuevoArreglo[index] = arreglo[index]; 
    }
    arreglo.splice(0, arreglo.length);
    igual.addEventListener('click', function(){
        var cadena1 = arreglo.join('');
        var cadena2 = nuevoArreglo.join('');
        var numero1 = parseInt(cadena1,10);
        var numero2 = parseInt(cadena2,10);
        segmento2.textContent = Math.pow(numero2, numero1);
    });
}





