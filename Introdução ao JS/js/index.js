// Output - Saída de dados
// 1° Função de alerta
// alert("Hello World!!!");

// 2° Função console
// console.log("Um log qualquer!!!");
// console.error("Um erro qualquer!!!");
// console.warn("Uma advertência qualquer!!!");
// console.debug("Um debug qualquer!!!");

// 3° Função InnerHTML
// document.querySelector("p+p").innerHTML = "Um texto inserido via JS";

// 4° Função write
// document.open();
// document.write("<h1>Bem-vindo ao JavaScript</h1>");
// document.close();

// ------------------ Eventos  -----------------------------

let count = 0;
let btnIncrement = document.getElementById("btnIncrement");
let btnDecrement = document.getElementById("btnDecrement");
let counter = document.getElementById("counter");

// console.debug(count)
// console.debug(btnIncrement)
// console.debug(btnDecrement)

btnIncrement.addEventListener("click", (event) => {
  event.preventDefault(); // Previne a ação padrão do navegador
  count++; // Somar mais 1 a contagem

  console.debug(count);
  counter.innerText = count;
});

btnDecrement.addEventListener("click", (event) => {
  event.preventDefault();
  count--; // Subtrai 1 da contagem
  console.debug(count);
  counter.innerText = count;
});

// -----------------------------------------------
let character = document.getElementById("character");
let caption = document.getElementById("caption");

character.addEventListener("mouseover", () => {
  caption.classList.remove("d-none");
});

character.addEventListener("mouseout", () => {
  caption.classList.add("d-none");
});

// -----------------------------------------------]
// TODO Adicionar efeito de Blur
