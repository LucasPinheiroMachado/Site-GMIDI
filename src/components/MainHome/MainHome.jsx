import './MainHome.css';
import './Ajuste.css';
import imgMenu from '../../assets/Design_sem_nome__10_-removebg-preview.png';
import imgBlog from '../../assets/blogIMG.png';
import imgProducts from '../../assets/produtosIMG.png';
import imgGames from '../../assets/jogosIMG.png';
import imgContact from '../../assets/contatoIMG.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const MainHome = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="MainHome">
      <div className="ChildMainHome">
        <div className="mainMenu">
          <img className="imgL1" src={imgMenu} alt="" />
          <div className="textCentral">
            <h1>Seja bem-vindo ao</h1>
            <h1>GMIDI world!</h1>
          </div>
          <img className="imgL2" src={imgMenu} alt="" />
        </div>
        <div className="spaceSection">
          <h2 className="sectionTitle">Explore a plataforma</h2>
        </div>
        <div className="firstLinks">
          <div className="cardsControl">
            <Link to="/products" className="btn-link">
              <div className="cardMenu">
                <h2>Produtos GMIDI:</h2>
                <img src={imgProducts} alt="" />
              </div>
            </Link>
            <Link to="/blog" className="btn-link">
              <div className="cardMenu">
                <h2>Blog GMIDI:</h2>
                <img src={imgBlog} alt="" />
              </div>
            </Link>
            <Link to="/games" className="btn-link">
              <div className="cardMenu">
                <h2>Jogos GMIDI:</h2>
                <img src={imgGames} alt="" />
              </div>
            </Link>
            <Link to="/contact" className="btn-link">
              <div className="cardMenu">
                <h2>Contato GMIDI:</h2>
                <img src={imgContact} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
