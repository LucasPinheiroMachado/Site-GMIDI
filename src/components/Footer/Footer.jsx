import { useEffect } from 'react';
import './Footer.css'; // Estilos separados para o rodapé

const Footer = () => {
  useEffect(() => {
    // Bloqueia o scroll ao renderizar o componente Footer
    document.body.style.overflow = 'hidden';

    // Limpa o efeito ao desmontar o componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <footer className="footer">
      <p>© 2024 GMIDI World. Desenvolvido por BitPin.</p>
    </footer>
  );
};

export default Footer;
