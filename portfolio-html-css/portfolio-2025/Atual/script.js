
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

  // Animação das barras de progresso
  const barras = document.querySelectorAll(".progresso");
  barras.forEach((barra) => {
    const valor = barra.getAttribute("data-valor");
    barra.style.width = valor + "%";
  });

function filtrar(categoria) {
  const cards = document.querySelectorAll('.caixinha-conhecimento');
  cards.forEach(card => {
    if (categoria === 'todos' || card.classList.contains(categoria)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
// Função para filtrar os cards de conhecimentos

document.addEventListener('DOMContentLoaded', () => {
  const faq = document.querySelectorAll('.btn-pergunta-sobremim');

  faq.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('ativo');
    });
  });
});
// Função para criar a interação do acordeão