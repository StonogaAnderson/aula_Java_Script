function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>obrigado por clicar</b>";
}
function redirecionar(){

    window.open("https://www.kabum.com.br/");
    window.location.href= "https://www.kabum.com.br/";
}
function trocar(element){
    //document.getElementById("mousemove").innerHTML="Obrigado";
    element.innerHTML="Obrigado";
}
function voltar(element){
    //document.getElementById("mousemove").innerHTML="Passe o Mouse Aqui";
    element.innerHTML="Passe o Mouse Aqui";
}

function load(){
    alert("Pagina Carreagada");

}
function funcaoChange(element){
    console.log(element.value)

}
/*function soma(n1,n2){
    return n1 +n2;

}*/
/*function validaIdade(idade){
    var validar;
if (idade>=18){
    validar = true;

    }else{
        validar = false;
    }
    return validar;
}
var idade =prompt("Qual sua idade?");
console.log(validaIdade(idade));*/
/*var d = new Date;
alert(d);
alert(d.getDay());
alert(d.getFullYear());
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());/*

/*var lista= ["Maça","Pera","Uva"];
//lista.push("Laranja");
//lista.pop();
console.log(lista.toString());
console.log(lista.join("  :  "))
//alert(lista[0])*/

/*var fruta = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"verde"}]
console.log(fruta);
alert(fruta[1].nome);*/

/*var idade =prompt("Qual sua idade?");
if(idade>=18){
alert("Maior de idade")

}else{
    alert("menor de idade")
}*/

/*var count = 0;
while(count<=5){
    console.log(count);
    count=count+1

};*/

/*var count;
for (count=0; count<=5;count++){
    alert(count);
}*/
