// Botão 0
  
function btn0 (){
  let btn = document.getElementById('number0')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
} 

// Botão 1

function btn1 (){
  let btn = document.getElementById('number1')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}


// Botão 2

function btn2 (){
  let btn = document.getElementById('number2')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Botão 3

function btn3 (){
  let btn = document.getElementById('number3')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Botão 4

function btn4 (){
  let btn = document.getElementById('number4')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Botão 5

function btn5 (){
  let btn = document.getElementById('number5')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Botão 6

function btn6 (){
  let btn = document.getElementById('number6')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Botão 7

function btn7 (){
  let btn = document.getElementById('number7')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Botão 8

function btn8 (){
  let btn = document.getElementById('number8')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Botão 9

function btn9 (){
  let btn = document.getElementById('number9')
  let btnValor = btn.textContent
  let tela = document.getElementById('telaunica')
  tela.value =  tela.value + btnValor 
}

// Operador + 

function somar(){
  let somar = document.getElementById('somar')
  let simbolomais = somar.innerHTML
  let tela = document.getElementById('telaunica')
  tela.value = tela.value + simbolomais  
  console.log( tela.value)
}

// Operador - 

function subtrair(){
  let subtrair = document.getElementById('subtrair')
  let simbolomenos = subtrair.innerHTML
  let tela = document.getElementById('telaunica')
  tela.value = tela.value + simbolomenos  
  console.log(tela.value)
}

// Operador * 

function multiplicar(){
  let multiplicar = document.getElementById('multiplicar')
  let simbolomenos = multiplicar.innerHTML
  let tela = document.getElementById('telaunica')
  tela.value = tela.value + simbolomenos  
  console.log(tela.value)
}

// Operador * 

function dividir(){
  let dividir = document.getElementById('dividir')
  let simbolomenos = dividir.innerHTML
  let tela = document.getElementById('telaunica')
  tela.value = tela.value + simbolomenos  
  console.log(tela.value)
}

// Operador % 

function resto(){
  let resto = document.getElementById('resto')
  let simbolomenos = resto.innerHTML
  let tela = document.getElementById('telaunica')
  tela.value = tela.value + simbolomenos  
  console.log(tela.value)
}

// Resultado (=)



function resultado(){
  let tela = document.getElementById('telaunica').value
  console.log(tela)
  let re = /[-,+,*,/,%]/;
  let index = tela.search(re)
  let NewTela = tela.split('').slice(1).join('')
  let operacaoindex0 = tela.split('').shift()
  console.log(operacaoindex0)
  console.log(NewTela)
  let newIndex = NewTela.search(re)
  let operadorindex0 =  newIndex 
  console.log(operadorindex0)
  console.log(index)
  let operador = index === 0 ? newIndex : index
  console.log(operador)
  let operacao = index === 0 ? NewTela[operador] : tela[operador] 
  console.log(operacao)
  let numero2 = index !== 0  ? Number(tela.substr(operador += 1)) : Number(NewTela.substr(operador += 1))  // substr extrai os elementos da string a partir do indice determinado
  console.log(numero2)
  let numero1 = index !== 0  ?  Number(tela.substr(0, operador -= 1)) :  Number(NewTela.substr(0, operador -= 1)) //substr(0,1) extrai os elementos da string a partir do indice 0 até o indice determinado
  console.log(numero1)
  let teste = ( operacao === '-' & operacaoindex0 === '-') ? ((numero1 + numero2) * -1 ) : ( operacao === '+' & operacaoindex0 === '+') ? (numero1 + numero2) : ( operacao === '+' & operacaoindex0 === '-') ? (numero2 - numero1) : ( operacao === '-' & operacaoindex0 === '+') ? (numero1 - numero2) : (operacao === '+' )  ? numero1 + numero2: (operacao === '-' ) ? numero1 - numero2 : (operacao === '*') ? numero1 * numero2 : (operacao === '/') ? numero1 / numero2  : (operacao === '%') ? ((numero1 / numero2)*100) + "%"  : (operacao === '-+') ? numero2 - numero1 : (operacao === '--') ?  ((numero2 + numero1) * -1): false
  console.log(teste)  
  let displayOne = document.getElementById('telaunica')
  displayOne.value = teste 
}


// deletando valores na tela

  function deletar(){
  let tela = document.getElementById('telaunica').value
  console.log(tela.length)
  let newValue = tela.substring(0, tela.length-1)
  let displayOne = document.getElementById('telaunica')
  displayOne.value = newValue 
  }

  // Zerando a tela

  function resetar(){
  let displayOne = document.getElementById('telaunica')
  displayOne.value = " "
  }
  

    






  






       

             











