import { useState } from 'react';
import Botao from '../Buttons/Buttons';
import logo from '../../assets/gmidilogo.png';
import './NavBar.css';
import { useAuthValue } from '../../contexts/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';

const NavBar = () => {
  const { user } = useAuthValue();
  const { logOut } = useAuthentication();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Fecha o menu
  };

  const handleLogout = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      logOut(); // Faz o logout se o usuário confirmar
    }
  };

  return (
    <div className="navBar">
      <img src={logo} alt="logo" className="logoPrincipal" />
      <div className="toogleMain">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
      <div className={`buttons ${isMenuOpen ? 'active' : ''}`}>
        <Botao nome="Menu" link="/" onClick={closeMenu} className="btnNavBar" />
        <Botao
          nome="Produtos"
          link="/products"
          onClick={closeMenu}
          className="btnNavBar"
        />
        <Botao
          nome="Blog"
          link="/blog"
          onClick={closeMenu}
          className="btnNavBar"
        />
        <Botao
          nome="Jogos"
          link="/games"
          onClick={closeMenu}
          className="btnNavBar"
        />
        <Botao
          nome="Contato"
          link="/contact"
          onClick={closeMenu}
          className="btnNavBar"
        />
        {user && (
          <Botao
            nome="Central"
            link="/dashboard"
            onClick={closeMenu}
            className="btnNavBar"
          />
        )}
        {user && (
          <Botao nome="Sair" onClick={handleLogout} style={{ color: 'red' }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
