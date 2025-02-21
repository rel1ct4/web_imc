
function calcularIMC(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    //Validação sobre campo vazio
    if(altura === "" || peso === "" ){
        alert("Apenas números serão aceitos")
            if(altura ===""){
                document.getElementById("altura").style.border = "2px solid red";
            }else{
                document.getElementById("peso").style.border = "2px solid red";
            }
        return;
    }else{
        document.getElementById("peso").style.border = ""; 
        document.getElementById("altura").style.border = ""; 

    }
    

    //Validação sobre altura e peso minimo
    
    if(altura <= 0.50 || altura >= 2.50){
        alert("Insira apenas alturas válidas")
        return;

    }else if(peso <= 10 || peso >= 300){
        alert("Insira apenas pesos válidos")
        return;}

    //Validação sobre caracteres que não sejam números
     if(isNaN(peso)|| isNaN(altura)){
        alert("Digite apenas números")
        document.getElementById("peso").style.border = "2px solid red";
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");

  resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;

    //validação sobre o imc
    let classificacao = "";

    if(imc < 18.5){
        classificacao= "Peso baixo";

    }else if(imc >= 18.6 || imc <= 24.99){
        classificacao = "Peso normal";

    }else if(imc >= 25 || imc <= 29.99){
        classificacao = "Pessoa em sobrepeso";

    }else if(imc >= 30 || imc <= 34.9){
        classificacao = "Pessoa com obesidade grau 1";

    }else if(imc >= 35 || imc <= 39.9){
        classificacao = "Pessoa com obesidade grau 2";

    }else if(imc >= 40 ){
        classificacao = "Pessoa com obesidade grau 3";
    }

    resultado.innerHTML += `<br>Classificação: ${classificacao}`;


}