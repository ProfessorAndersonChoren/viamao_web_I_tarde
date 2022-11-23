// Pegar os inputs
let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");

let divOutput = document.getElementById("divOutput");

function showResult(message) {
  divOutput.innerText = message;
  divOutput.classList.remove("d-none");
}

// Pegar os botões
document.getElementById("btnSum").addEventListener("click", () => {
  let valueOne = parseFloat(numberOne.value);
  let valueTwo = parseFloat(numberTwo.value);

  let sum = valueOne + valueTwo;

  showResult(`A soma dos números ${valueOne} e ${valueTwo} é igual à ${sum}`);
});

document.getElementById("btnSub").addEventListener("click", () => {
  let valueOne = parseFloat(numberOne.value);
  let valueTwo = parseFloat(numberTwo.value);

  let sub = valueOne - valueTwo;

  showResult(
    `A subtração dos números ${valueOne} e ${valueTwo} é igual à ${sub}`
  );
});

document.getElementById("btnMult").addEventListener("click", () => {
  let valueOne = parseFloat(numberOne.value);
  let valueTwo = parseFloat(numberTwo.value);

  let mult = valueOne * valueTwo;

  showResult(
    `A multiplicação dos números ${valueOne} e ${valueTwo} é igual à ${mult}`
  );
});

document.getElementById("btnDiv").addEventListener("click", () => {
    let valueOne = parseFloat(numberOne.value)
    let valueTwo = parseFloat(numberTwo.value)

    let div = valueOne / valueTwo

    showResult(`A divisão dos números ${valueOne} e ${valueTwo} é igual à ${div}`)
})