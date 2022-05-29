


function calcIMC(){
    let nome = document.getElementById('nome')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let resultado = document.getElementById('resultado')


    nome = nome.value
    altura = altura.value
    peso = peso.value

    if( nome == "" || altura == "" || peso ==""){
        return alert ("Preencha todos os campos!")
    }


    resposta = peso / (altura * altura)

    resposta = resposta.toFixed(2)

    resultado.innerHTML = (`<p>${nome}, seu imc é: ${resposta} </p>` )

    resultado.innerHTML += (`<p>Sua classificação de peso é: ${returnClassificacao()}</p>` )
    

    function returnClassificacao(){
        if(resposta < 18.5){
            return "magreza"
        }else {if(resposta >= 18.5 && resposta <= 24.9){
                return "normal"
        }else {if(resposta >= 25 && resposta <= 29.9){
            return "sobrepeso"
        }else {if(resposta >=30 && resposta <= 39.9){
            return "obesidade"
        }else {if(resposta > 40){
            return "obesidade grave"
        }}}}}
        
    }
console.log(returnClassificacao());

}

