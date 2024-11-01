import { NavLink, useLocation } from 'react-router-dom';

const Botao = (props) => {
  const location = useLocation(); // Obtemos a localização atual

  // Verifica se o botão deve estar ativo com base na localização atual
  const isActive =
    (props.link === '/' && location.pathname === '/') ||
    (props.link === '/products' && location.pathname === '/products') ||
    (props.link === '/contact' && location.pathname === '/contact') ||
    (props.link === '/blog' && location.pathname === '/blog') ||
    (props.link === '/blog' && location.pathname.startsWith('/posts')) ||
    (props.link === '/blog' && location.pathname.startsWith('/search')) ||
    (props.link === '/games' && location.pathname === '/games') ||
    (props.link === '/games' && location.pathname === '/secretword') ||
    (props.link === '/dashboard' && location.pathname === '/dashboard') ||
    (props.link === '/dashboard' && location.pathname === '/createpost') ||
    (props.link === '/dashboard' && location.pathname.startsWith('/edit'));

  return (
    <NavLink
      to={props.link || '#'}
      onClick={props.onClick}
      style={{
        color: isActive ? 'black' : 'white',
        textDecoration: 'none',
        display: 'inline-block',
        borderBottom: isActive ? '2px solid black' : 'none',
        borderRadius: '0',
        cursor: 'pointer',
        marginLeft: '1vw',
        ...props.style,
      }}
      className={isActive ? 'active' : ''}
    >
      {props.nome}
    </NavLink>
  );
};

export default Botao;
