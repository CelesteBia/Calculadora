let num1 = "";
let num2 = "";
let operador = "";
let result = "";

function apagar(){
    num1 = "";
    num2 = "";
    operador = "";
    result = "";
    document.getElementById("display").innerHTML = "";
}

function escreverNumero(num){
    if(num1 !== "" && result !== "" && operador === ""){
        apagar();
    }
    if(operador === ""){
        document.getElementById("display").innerHTML += num;
        num1 += num; // Adicione o número a num1
    }
    else if(operador !== "" && num2 === ""){
        document.getElementById("display").innerHTML = num;
        num2 = num; // Defina num2 como o número clicado
    }
    else{
        document.getElementById("display").innerHTML += num;
        num2 += num; // Adicione o número a num2
    }
}

function usarOperador(operadorUsado){
    if(num1 !== ""){
        operador = operadorUsado;
    }
}

function calcular(e){
    e.preventDefault();

    if(num1 !== "" && num2 !== "" && operador !== ""){
        switch(operador){
            case '+':
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                result = pparseFloat(num1) - pparseFloat(num2);
                break;
            case '*':
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                result = parseFloat(num1) / parseFloat(num2);
                break;
            case 'x²':
                result = parseFloat(num1) ** parseFloat(num2);
                break;
        }


        let numFloat = parseFloat(result);
        document.getElementById("display").innerHTML = numFloat.toFixed(2);
        num1 = "" + result;
        num2 = "";
        operador = "";
    }
}

function raizQuad() {
    if (num1 !== "" && num2 === "" && operador === "") {
      result = Math.sqrt(parseFloat(num1));
      let numFloat = parseFloat(result);
      document.getElementById("display").innerHTML = "" + numFloat.toFixed(2);
      n1 = "" + result;
    }
}
