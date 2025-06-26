
document.addEventListener("DOMContentLoaded", () => {
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
   if (window.scrollY > 300)
    {
    btnTopo.style.display = "block";
    } else 
    {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ 
        top: 0,
        behavior: "smooth"
    });
});
}); // Função para exibir o botão "Voltar ao Topo" quando a página for rolada

const btnMenu = document.getElementById("btnMenu");
const menuCabecalho = document.getElementById("menuCabecalho");

btnMenu.addEventListener("click", () => { 
    menuCabecalho.classList.toggle("ativo")
});