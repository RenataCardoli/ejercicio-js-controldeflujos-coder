let numero1 = parseInt(prompt("ingrese un numero:",0));
let numero2 = parseInt(prompt("ingrese un nuevo numero:",0));

if((numero1 >= 5) && (numero2 <= 10)){
    alert("Los números ingresados estan entre 5 y 10 y son: "+numero1+" y "+numero2);
}else{
    alert("Los numero ingresados no estan entre 5 y 10 y son: "+numero1+" y "+numero2);
}