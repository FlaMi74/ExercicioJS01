let numOne = prompt("Digite o primeiro número:")

let numTwo = prompt("Digite o segundo número:")

let numSum, string, yOn, soma

alert(`A soma dos dois números é ${(Number(numOne) + Number(numTwo))}.`)

alert(`A subtração dos dois números é ${(Number(numOne) - Number(numTwo)).toFixed(2)}. `)

alert(`A multiplicação dos dois números é ${(Number(numOne) * Number(numTwo)).toFixed(2)}. `)

alert(`A divisão entre os dois números é ${(Number(numOne) / Number(numTwo)).toFixed(2)}. `)

alert(`O resto da divisão entre os dois números é ${(Number(numOne) % Number(numTwo)).toFixed(2)}. `)


function rest(n1, n2) {
 numSum = ((n1 + n2) % 2)

 let soma = (n1 + n2)
 string = String(soma)

 if (string.includes(".")) {
    yOn = false
 } else {
    yOn = true
 }
 return Number(numSum), yOn
}

rest(Number(numOne), Number(numTwo))

if (Number(numOne) == Number(numTwo)) {
    alert("Os dois números inseridos são iguais!")
} else {
    alert("Os dois números inseridos são diferentes!")
}


if(numSum == 0 && yOn !== false)  {
    alert(`A soma dos números é PAR!`)
  } 
  else if(numSum !== 0 && yOn !== false) {
    alert("A soma dos números é ÍMPAR!")
   
  } else {
      alert("A soma dos números é decimal, então não é classificada como par ou ímpar! Até mais!")
  }
  