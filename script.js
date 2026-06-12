const botao = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.innerHTML =
        "🌱 A agricultura alimenta o mundo e contribui para uma vida mais saudável e sustentável!";
});
