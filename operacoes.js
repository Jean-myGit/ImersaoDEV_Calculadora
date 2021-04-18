
// Criando uma variável para capturar o elemento
// do HTML pelo Id. Este elemento mostrará os valores no display.
let inputResultado = document.getElementById("telaCalculadora")

// Objeto para manter controle dos dados e funcão para calcular.
let calculo = {
   valorSalvo: null,
   funcaoParaCalcular: null
}

// Ao carregar a janela, inicializa os métodos e variaveis
window.addEventListener("load", function() {
   atribuirEventos();
})

// Adiciona o número na Tela
function clicarNumero() {
   // Se o valor na tela não for um número,
   // substitui pelo número/valor do botão
   if (isNaN (inputResultado.value)) {
      inputResultado.value = event.target.textContent;

      // Senão, adiciona o texto junto com o existente
   }else {
      // Se o valor na tela for zero, substitui o valor na tela pelo número clicado
      if (inputResultado.value === 0) {
         inputResultado.value = event.target.textContent;

      // Senão adiciona o número ao input para criar digitos maiores que 0
      } else {
         inputResultado.value += event.target.textContent;
      }
   }
}

//Atribui os eventos a todos os botões da calculadora
function atribuirEventos() {
   document.getElementById("btnVlr0").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr1").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr2").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr3").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr4").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr5").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr6").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr7").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr8").addEventListener("click", clicarNumero)
   document.getElementById("btnVlr9").addEventListener("click", clicarNumero)
}

// Função que SOMA dois valores
function somarValores(valor1, valor2) {
   return valor1 + valor2
}

// Função que SUBTRAI o segundo valor do primeiro
function subtrairValores(valor1, valor2) {
   return valor1 - valor2
}

// Função que MULTIPLICA dois valores
function multiplicarValores(valor1, valor2) {
   return valor1 * valor2
}

// Função que DIVIDE o primeiro pelo segundo
function dividirValores(valor1, valor2) {
   if (valor2 == 0) {
      return "Erro, não há divisão por (0) Zero"

   }else {
      return valor1 / valor2
   }
   
}

// Limpa todos os dados do input e objeto de calculo
function limparDados() {
   inputResultado.value = ""

   calculo.valorSalvo = null
   calculo.funcaoParaCalcular = null
}

//Inserir PONTO
function clicarPonto(){
   if (inputResultado.value === "" || isNaN (inputResultado.value)) {
      inputResultado.value = "0."

   } else if (!inputResultado.value.includes(".")) {
      inputResultado.value = inputResultado.value + "."

   }
}

// função que atribui a operação correta ao objeto calculo
function atribuirOperacao(operador) {
   if (operador == "+") {
      calculo.funcaoParaCalcular = somarValores

   } else if (operador == "-") {
      calculo.funcaoParaCalcular = subtrairValores

   } else if (operador == "X") {
      calculo.funcaoParaCalcular = multiplicarValores

   } else if (operador == "/") {
      calculo.funcaoParaCalcular = dividirValores

   } else {
      alert("Operação não reconhecida!")
   }
}

// função que atualiza o objeto calculo ao clicar nos operadores
function clicarOperador() {
   if (!isNaN(inputResultado.value)) {
      if (calculo.valorSalvo == null) {
         calculo.valorSalvo = Number(inputResultado.value)

      } else if (calculo.funcaoParaCalcular != null) {
         calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))
      }
   }

   let operador = event.target.textContent
   atribuirOperacao(operador)
   inputResultado.value = operador
}

function clicarResultado() {
   if (!isNaN (inputResultado.value) && calculo.funcaoParaCalcular != null) {
      let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))

      inputResultado.value = resultado
      calculo.valorSalvo = resultado

      calculo.funcaoParaCalcular = null
   }
}


function somenteNumeros(evt) {
  var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   //var regex = /^[0-9.,]+$/;
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}
