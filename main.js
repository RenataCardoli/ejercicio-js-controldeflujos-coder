let numero1 = parseInt(prompt("ingrese un numero:",0));
let numero2 = parseInt(prompt("ingrese un nuevo numero:",0));

if(numero1 >= 1 && numero1 <= 10 && numero2>=1 && numero2 <=10) {
    alert("Los números ingresados estan entre 1 y 10 y son: "+numero1+" y "+numero2);
}else{
    alert("Uno de los numeros ingresados no esta entre 1 y 10 y son: "+numero1+" y "+numero2);
}