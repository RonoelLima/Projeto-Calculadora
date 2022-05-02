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
  console.log(index)
  let operador = index  
  console.log(operador)
  let operacao = tela[operador] 
  console.log(operacao)
  let numero2 = Number(tela.substr(operador += 1))// substr extrai os elementos da string a partir do indice determinado
  console.log(numero2)
  let numero1 = Number(tela.substr(0, operador -= 1)) //substr(0,1) extrai os elementos da string a partir do indice 0 até o indice determinado
  let teste = (operacao === '+') ? numero1 + numero2: (operacao === '-') ? numero1 - numero2 : (operacao === '*') ? numero1 * numero2 : (operacao === '/') ? numero1 / numero2  : (operacao === '%') ? ((numero1 / numero2)*100) + "%"  :false
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
  

      


      
      
  

  // var numero2 = 10
  // var numero1 = 20
  // let operacao = "+"
  
  
  
  // function calcual(){ 
    
  //   if(operacao == '+')
  // { numero1 + numero2} 
  //   else if(operacao == "-")
  //     { numero1 - numero2} 
  //       else if(operacao == "*")
  //         { numero1 * numero2}
  //         else if(operacao == "/")
  //         { numero1 / numero2} 
  //           else if(operacao == "%") 
  //            { numero1 % numero2}      }






  






       

             











