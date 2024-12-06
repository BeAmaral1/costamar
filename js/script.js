// Muda a cor da navbar quando estiver sobre a div booking 
// window.addEventListener('scroll', alterarCorNavbar);

// function alterarCorNavbar() {
//     const navbar = document.querySelector('nav');
//     const booking = document.querySelector('.pesquisar');
//     const bookingRect = booking.getBoundingClientRect();

//     if (bookingRect.top < 50) {
//         navbar.classList.add('navbar-solida');

//     } else {
//         navbar.classList.remove('navbar-solida');
//     }
// }


// Muda a cor da navbar quando estiver sobre a div booking ou slides
window.addEventListener('scroll', alterarCorNavbar);

function alterarCorNavbar() {
    const navbar = document.querySelector('nav');
    const booking = document.querySelector('.pesquisar');
    const slides = document.querySelector('.carousel');
    
    // Verifica qual elemento usar baseado no tamanho da tela
    const targetElement = window.innerWidth <= 768 ? slides : booking;

    if (targetElement) {
        const targetRect = targetElement.getBoundingClientRect();

        if (targetRect.top < 50) {
            navbar.classList.add('navbar-solida');
        } else {
            navbar.classList.remove('navbar-solida');
        }
    }
}


// Carrossel
const clientes = document.querySelectorAll('.cliente');
let clienteAtual = 0;

function mostrarSlide(index) {
    clientes.forEach((cliente, i) => {
        if (i === index) {
            cliente.style.display = 'block';
        } else {
            cliente.style.display = 'none';
        }
    });
}

function proximo() {
    clienteAtual = (clienteAtual +1) % clientes.length;
    mostrarSlide(clienteAtual);
}

function anterior() {
    clienteAtual = (clienteAtual -1 + clientes.length) % clientes.length;
    mostrarSlide(clienteAtual);
}

document.querySelector('.anterior').addEventListener('click', anterior);
document.querySelector('.proximo').addEventListener('click', proximo);

// Mostra o primeiro cliente ao carregar a página
mostrarSlide(clienteAtual);


function abrirEmTelaCheia() {
    const video = document.getElementById('video');

    // Coloca o vídeo em tela cheia
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }

    // Reproduz o vídeo assim que a tela cheia é ativada
    video.play();
}


// Seleciona o botão "Back to Top"
const backToTopButton = document.getElementById('back-to-top');

// Mostra ou esconde o botão com base na rolagem da página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Smooth Scroll para o topo
backToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

const infopasseio = document.querySelector('.info-passeio'); // Seleciona o contêiner correto
const btnvermais = document.getElementById('btn-vermais'); // Botão para expandir/recolher

btnvermais.addEventListener('click', () => {
  infopasseio.classList.toggle('expanded'); // Adiciona ou remove a classe 'expanded'
  btnvermais.textContent = infopasseio.classList.contains('expanded')
    ? 'Ver menos'
    : 'Ver mais'; // Alterna entre 'Ver mais' e 'Ver menos'
});



document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const slideWidth = slides[0].getBoundingClientRect().width;

  let currentIndex = 0;

  // Função para avançar automaticamente
  function moveToNextSlide() {
    if (currentIndex < 9) { // Vai até o 10º slide (índice 9)
      currentIndex++;
    } else {
      currentIndex = 0; // Retorna ao início
    }
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Muda o slide a cada 2 segundos
  setInterval(moveToNextSlide, 2000);
});
