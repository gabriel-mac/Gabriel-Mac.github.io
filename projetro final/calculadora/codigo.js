function somar(){
    var v1=0;
    var v2=0;

    var v1=document.getElementById("valor1").value;
    var v2=document.getElementById("valor2").value;

    v1= Number(v1);
    v2= Number(v2);

    var total = v1+v2;
    document.getElementById("total").innerHTML = total;

}
function subitrair(){
    var v1=0;
    var v2=0;
    v1= document.getElementById("valor1").value;
    v2= document.getElementById("valor2").value;

    v1=Number(v1);
    v2=Number(v2);

    var total= v1-v2;
    document.getElementById("total").innerHTML = total;
}
function multiplicar(){
    var v1=0;
    var v2=0;
    v1= document.getElementById("valor1").value;
    v2= document.getElementById("valor2").value;

    v1=Number(v1);
    v2=Number(v2);

    var total= v1*v2;
    document.getElementById("total").innerHTML = total;
}
function dividir(){
    var v1=0;
    var v2=0;
    v1= document.getElementById("valor1").value;
    v2= document.getElementById("valor2").value;

    v1=Number(v1);
    v2=Number(v2);
    var total
    if(v2 == 0){
        total="nao pode dividir por zero";
    } else {
        
    var total= v1/v2;
    }
    document.getElementById("total").innerHTML = total;
}