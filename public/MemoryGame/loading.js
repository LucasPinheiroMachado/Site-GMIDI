window.onload = function () {
  const images = document.querySelectorAll('.card');
  let loadedImages = 0;

  // Função para verificar quando todas as imagens foram carregadas
  images.forEach((image) => {
    if (image.complete) {
      loadedImages++;
    } else {
      image.addEventListener('load', () => {
        loadedImages++;
        if (loadedImages === images.length) {
          showGame();
        }
      });
    }
  });

  // Se todas as imagens já estiverem carregadas
  if (loadedImages === images.length) {
    showGame();
  }
};

function showGame() {
  // Remove a mensagem de "loading..." e mostra o jogo
  document.getElementById('loadingMessage').style.display = 'none';
  document.getElementById('loadingOverlay').style.display = 'none';
}
