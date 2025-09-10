
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


// Função para exibir o botão "Voltar ao Topo" quando a página for rolada
btnTopo.addEventListener("click", () => {
    window.scrollTo({ 
        top: 0,
        behavior: "smooth"
    });
});
}); 

  // Animação das barras de progresso
  const barras = document.querySelectorAll(".progresso");
  barras.forEach((barra) => {
    const valor = barra.getAttribute("data-valor");
    barra.style.width = valor + "%";
  });


// Função para filtrar os cards de conhecimentos

function filtrar(categoria, btn) {
  const cards = document.querySelectorAll('.caixinha-conhecimento');
  cards.forEach(card => {
    if (categoria === 'todos' || card.classList.contains(categoria)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  // controla qual botão está ativo
  document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}


// Função para criar a interação do acordeão
document.addEventListener('DOMContentLoaded', () => {
  const faq = document.querySelectorAll('.btn-pergunta-sobremim');

  faq.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('ativo');
    });
  });
});
