let numeroAleatorio = Math.floor(Math.random() * 12) + 1;

const iniciar = document.querySelector('#iniciar');
const reiniciar = document.querySelector('#reiniciar');
const card01 = document.querySelector('#card01');
const card02 = document.querySelector('#card02');
const card03 = document.querySelector('#card03');
const card04 = document.querySelector('#card04');
const card05 = document.querySelector('#card05');
const card06 = document.querySelector('#card06');
const card07 = document.querySelector('#card07');
const card08 = document.querySelector('#card08');
const card09 = document.querySelector('#card09');
const card10 = document.querySelector('#card10');
const card11 = document.querySelector('#card11');
const card12 = document.querySelector('#card12');
const jogo = document.querySelector('.animeGame');

const srcDefault = 'assets/interrogacao.png';

const src01 = 'https://imgur.com/8cYsNYO.jpg';
const src02 = 'https://imgur.com/xBlZp5a.jpg';
const src03 = 'https://imgur.com/NXKQ0t5.jpg';
const src04 = 'https://imgur.com/BxpCYmc.jpg';
const src05 = 'https://imgur.com/EriXiGs.jpg';
const src06 = 'https://imgur.com/tomyYDP.jpg';

const addCard = function (id, src) {
  let card = document.createElement('img');
  card.className = 'card';
  card.id = `${id}`;
  card.src = `${src}`;
  jogo.appendChild(card);
};

iniciar.addEventListener('click', function () {
  iniciar.disabled = true;

  reiniciar.addEventListener('click', function () {
    location.reload();
  });

  card01.remove();
  card02.remove();
  card03.remove();
  card04.remove();
  card05.remove();
  card06.remove();
  card07.remove();
  card08.remove();
  card09.remove();
  card10.remove();
  card11.remove();
  card12.remove();

  const localizacaodascastasgame = document.querySelector('.animeGame');
  if (window.innerWidth <= 1320) {
    localizacaodascastasgame.style.left = '1.3vw';
  }

  let i = 0;
  let v1 = 100;
  let v2 = 100;
  let v3 = 100;
  let v4 = 100;
  let v5 = 100;
  let v6 = 100;
  let v7 = 100;
  let v8 = 100;
  let v9 = 100;
  let v10 = 100;
  let v11 = 100;
  let v12 = 100;

  let carta01;
  let carta02;
  let carta03;
  let carta04;
  let carta05;
  let carta06;
  let carta07;
  let carta08;
  let carta09;
  let carta10;
  let carta11;
  let carta12;

  while (i < 12) {
    if (
      numeroAleatorio != v1 &&
      numeroAleatorio != v2 &&
      numeroAleatorio != v3 &&
      numeroAleatorio != v4 &&
      numeroAleatorio != v5 &&
      numeroAleatorio != v6 &&
      numeroAleatorio != v7 &&
      numeroAleatorio != v8 &&
      numeroAleatorio != v9 &&
      numeroAleatorio != v10 &&
      numeroAleatorio != v11 &&
      numeroAleatorio != v12
    ) {
      switch (numeroAleatorio) {
        case 1:
          carta01 = addCard('card01', src01);
          v1 = numeroAleatorio;
          break;
        case 2:
          carta02 = addCard('card02', src01);
          v2 = numeroAleatorio;
          break;
        case 3:
          carta03 = addCard('card03', src02);
          v3 = numeroAleatorio;
          break;
        case 4:
          carta04 = addCard('card04', src02);
          v4 = numeroAleatorio;
          break;
        case 5:
          carta05 = addCard('card05', src03);
          v5 = numeroAleatorio;
          break;
        case 6:
          carta06 = addCard('card06', src03);
          v6 = numeroAleatorio;
          break;
        case 7:
          carta07 = addCard('card07', src04);
          v7 = numeroAleatorio;
          break;
        case 8:
          carta08 = addCard('card08', src04);
          v8 = numeroAleatorio;
          break;
        case 9:
          carta09 = addCard('card09', src05);
          v9 = numeroAleatorio;
          break;
        case 10:
          carta10 = addCard('card10', src05);
          v10 = numeroAleatorio;
          break;
        case 11:
          carta11 = addCard('card11', src06);
          v11 = numeroAleatorio;
          break;
        case 12:
          carta12 = addCard('card12', src06);
          v12 = numeroAleatorio;
          break;
      }
      i += 1;
    }
    numeroAleatorio = Math.floor(Math.random() * 12) + 1;
  }
  const contador = document.querySelector('.contadorBeta');
  contador.className = 'contador';
  document.body.appendChild(contador);

  const tempoRestante = 5;
  let segundosRestantes = tempoRestante;

  const atualizarContador = function () {
    contador.textContent = `Tempo restante: ${segundosRestantes} segundos`;

    if (segundosRestantes > 0) {
      segundosRestantes--;
      setTimeout(atualizarContador, 1000); // Atualiza a cada segundo
    } else {
      contador.remove();
    }
  };

  atualizarContador();
  setTimeout(function () {
    let cartas = document.querySelectorAll('.card');
    cartas.forEach(function (carta) {
      carta.src = srcDefault;
    });
    jogoIniciado();
  }, 5000);

  function jogoIniciado() {
    carta01 = document.querySelector('#card01');
    carta02 = document.querySelector('#card02');
    carta03 = document.querySelector('#card03');
    carta04 = document.querySelector('#card04');
    carta05 = document.querySelector('#card05');
    carta06 = document.querySelector('#card06');
    carta07 = document.querySelector('#card07');
    carta08 = document.querySelector('#card08');
    carta09 = document.querySelector('#card09');
    carta10 = document.querySelector('#card10');
    carta11 = document.querySelector('#card11');
    carta12 = document.querySelector('#card12');

    let cardsAbertos = [];
    let contadorDeCards = 0;
    let validado = true;

    let game = 'iniciado';

    let idDaImagem1;
    let idDaImagem2;

    let acertos = 0;
    let erros = 0;

    let contadorGame = 0;

    let cartas2 = document.querySelectorAll('.card');
    cartas2.forEach(function (carta2) {
      carta2.addEventListener('click', function (event) {
        validado = true;
        if (contadorGame === 0) {
          idDaImagem1 = event.target.id;
          cardsAbertos.forEach((IDs) => {
            if (IDs == idDaImagem1) {
              validado = false;
            }
          });
          if (validado == false) {
            return;
          }
          if (idDaImagem1 == 'card01') {
            carta01.src = src01;
          }
          if (idDaImagem1 == 'card02') {
            carta02.src = src01;
          }
          if (idDaImagem1 == 'card03') {
            carta03.src = src02;
          }
          if (idDaImagem1 == 'card04') {
            carta04.src = src02;
          }
          if (idDaImagem1 == 'card05') {
            carta05.src = src03;
          }
          if (idDaImagem1 == 'card06') {
            carta06.src = src03;
          }
          if (idDaImagem1 == 'card07') {
            carta07.src = src04;
          }
          if (idDaImagem1 == 'card08') {
            carta08.src = src04;
          }
          if (idDaImagem1 == 'card09') {
            carta09.src = src05;
          }
          if (idDaImagem1 == 'card10') {
            carta10.src = src05;
          }
          if (idDaImagem1 == 'card11') {
            carta11.src = src06;
          }
          if (idDaImagem1 == 'card12') {
            carta12.src = src06;
          }
        } else if (contadorGame === 1) {
          idDaImagem2 = event.target.id;
          if (idDaImagem1 == idDaImagem2) {
            return;
          }
          cardsAbertos.forEach((IDs) => {
            if (IDs == idDaImagem2) {
              validado = false;
            }
          });
          if (validado == false) {
            return;
          }
          if (
            (idDaImagem1 == 'card01' || idDaImagem1 == 'card02') &&
            (idDaImagem2 == 'card02' || idDaImagem2 == 'card01') &&
            idDaImagem1 != idDaImagem2
          ) {
            acertos += 1;
            carta01.src = src01;
            carta02.src = src01;
            cardsAbertos[contadorDeCards] = idDaImagem1;
            contadorDeCards += 1;
            cardsAbertos[contadorDeCards] = idDaImagem2;
            contadorDeCards += 1;
          } else if (
            (idDaImagem1 == 'card03' || idDaImagem1 == 'card04') &&
            (idDaImagem2 == 'card04' || idDaImagem2 == 'card03') &&
            idDaImagem1 != idDaImagem2
          ) {
            acertos += 1;
            carta03.src = src02;
            carta04.src = src02;
            cardsAbertos[contadorDeCards] = idDaImagem1;
            contadorDeCards += 1;
            cardsAbertos[contadorDeCards] = idDaImagem2;
            contadorDeCards += 1;
          } else if (
            (idDaImagem1 == 'card05' || idDaImagem1 == 'card06') &&
            (idDaImagem2 == 'card06' || idDaImagem2 == 'card05') &&
            idDaImagem1 != idDaImagem2
          ) {
            acertos += 1;
            carta05.src = src03;
            carta06.src = src03;
            cardsAbertos[contadorDeCards] = idDaImagem1;
            contadorDeCards += 1;
            cardsAbertos[contadorDeCards] = idDaImagem2;
            contadorDeCards += 1;
          } else if (
            (idDaImagem1 == 'card07' || idDaImagem1 == 'card08') &&
            (idDaImagem2 == 'card08' || idDaImagem2 == 'card07') &&
            idDaImagem1 != idDaImagem2
          ) {
            acertos += 1;
            carta07.src = src04;
            carta08.src = src04;
            cardsAbertos[contadorDeCards] = idDaImagem1;
            contadorDeCards += 1;
            cardsAbertos[contadorDeCards] = idDaImagem2;
            contadorDeCards += 1;
          } else if (
            (idDaImagem1 == 'card09' || idDaImagem1 == 'card10') &&
            (idDaImagem2 == 'card10' || idDaImagem2 == 'card09') &&
            idDaImagem1 != idDaImagem2
          ) {
            acertos += 1;
            carta09.src = src05;
            carta10.src = src05;
            cardsAbertos[contadorDeCards] = idDaImagem1;
            contadorDeCards += 1;
            cardsAbertos[contadorDeCards] = idDaImagem2;
            contadorDeCards += 1;
          } else if (
            (idDaImagem1 == 'card11' || idDaImagem1 == 'card12') &&
            (idDaImagem2 == 'card12' || idDaImagem2 == 'card11') &&
            idDaImagem1 != idDaImagem2
          ) {
            acertos += 1;
            carta11.src = src06;
            carta12.src = src06;
            cardsAbertos[contadorDeCards] = idDaImagem1;
            contadorDeCards += 1;
            cardsAbertos[contadorDeCards] = idDaImagem2;
            contadorDeCards += 1;
          } else {
            erros += 1;
            if (idDaImagem1 == 'card01') {
              carta01.src = srcDefault;
            }
            if (idDaImagem1 == 'card02') {
              carta02.src = srcDefault;
            }
            if (idDaImagem1 == 'card03') {
              carta03.src = srcDefault;
            }
            if (idDaImagem1 == 'card04') {
              carta04.src = srcDefault;
            }
            if (idDaImagem1 == 'card05') {
              carta05.src = srcDefault;
            }
            if (idDaImagem1 == 'card06') {
              carta06.src = srcDefault;
            }
            if (idDaImagem1 == 'card07') {
              carta07.src = srcDefault;
            }
            if (idDaImagem1 == 'card08') {
              carta08.src = srcDefault;
            }
            if (idDaImagem1 == 'card09') {
              carta09.src = srcDefault;
            }
            if (idDaImagem1 == 'card10') {
              carta10.src = srcDefault;
            }
            if (idDaImagem1 == 'card11') {
              carta11.src = srcDefault;
            }
            if (idDaImagem1 == 'card12') {
              carta12.src = srcDefault;
            }

            if (idDaImagem2 == 'card01') {
              carta01.src = srcDefault;
            }
            if (idDaImagem2 == 'card02') {
              carta02.src = srcDefault;
            }
            if (idDaImagem2 == 'card03') {
              carta03.src = srcDefault;
            }
            if (idDaImagem2 == 'card04') {
              carta04.src = srcDefault;
            }
            if (idDaImagem2 == 'card05') {
              carta05.src = srcDefault;
            }
            if (idDaImagem2 == 'card06') {
              carta06.src = srcDefault;
            }
            if (idDaImagem2 == 'card07') {
              carta07.src = srcDefault;
            }
            if (idDaImagem2 == 'card08') {
              carta08.src = srcDefault;
            }
            if (idDaImagem2 == 'card09') {
              carta09.src = srcDefault;
            }
            if (idDaImagem2 == 'card10') {
              carta10.src = srcDefault;
            }
            if (idDaImagem2 == 'card11') {
              carta11.src = srcDefault;
            }
            if (idDaImagem2 == 'card12') {
              carta12.src = srcDefault;
            }
          }
          idDaImagem1 = undefined;
          idDaImagem2 = undefined;
        }
        if (acertos === 6) {
          game = 'Vitoria';
          const overlay = document.createElement('div');
          overlay.className = 'overlay';
          const popup = document.createElement('div');
          popup.className = 'popup';
          popup.style.backgroundColor = 'green';
          const message = document.createElement('p');
          message.textContent = 'Parabéns! Você venceu!';
          const reloadButton = document.createElement('button');
          reloadButton.textContent = 'Jogar Novamente';
          reloadButton.addEventListener('click', function () {
            location.reload();
          });
          reloadButton.style.backgroundColor = 'transparent';
          popup.appendChild(message);
          overlay.appendChild(popup);
          popup.appendChild(reloadButton);

          // Adicione a div ao corpo (body)
          document.body.appendChild(overlay);
        }
        if (erros === 4) {
          game = 'Derrota';
          const overlay = document.createElement('div');
          overlay.className = 'overlay';
          const popup = document.createElement('div');
          popup.className = 'popup';
          popup.style.backgroundColor = 'red';
          const message = document.createElement('p');
          message.textContent = 'Ops, você perdeu!';
          const reloadButton = document.createElement('button');
          reloadButton.textContent = 'Jogar novamente';
          reloadButton.addEventListener('click', function () {
            location.reload();
          });
          reloadButton.style.backgroundColor = 'transparent';
          popup.appendChild(message);
          overlay.appendChild(popup);
          popup.appendChild(reloadButton);

          // Adicione a div ao corpo (body)
          document.body.appendChild(overlay);
        }
        contadorGame += 1;
        if (contadorGame >= 2) {
          contadorGame = 0;
        }
      });
    });
  }
});
