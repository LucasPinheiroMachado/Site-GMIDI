import './AllGames.css';
import { Link } from 'react-router-dom';

const AllGames = () => {
  return (
    <div className="MainGames">
      <div className="ChildMainGames">
        <h1>Jogos GMIDI:</h1>
        <div className="linksGames">
          <a href="/MemoryGame/memorygame.html" className="btn-flink">
            Jogo da memoria
          </a>
          <Link to="/secretword" className="btn-flink">
            Jogo palavra secreta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllGames;
