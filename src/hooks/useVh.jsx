import { useEffect } from 'react';

const useVh = () => {
  useEffect(() => {
    // Função para definir o valor de 1vh em CSS
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Defina o valor inicial quando a página carregar
    setVh();

    // Atualize o valor de vh ao redimensionar a janela
    window.addEventListener('resize', setVh);

    // Cleanup ao desmontar o componente
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);
};

export default useVh;
