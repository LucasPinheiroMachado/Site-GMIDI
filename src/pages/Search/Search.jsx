import './Search.css';

// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

// components
import PostDetail from '../../components/PostDetail/PostDetail';
import FooterNotFixed from '../../components/FooterNotFixed/FooterNotFixed';
import { Link } from 'react-router-dom';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');

  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <>
      <div className="search_container">
        <h1 className="searchQuestion">Resultados encontrados para:</h1>
        <h1 className="searchResult">"{search}"</h1>
        <div className="post-list">
          {posts && posts.length === 0 && (
            <div className="notFoundPost">
              <p>Não foram encontrados posts a partir da sua busca...</p>
              <Link to="/blog" className="btn btn-dark">
                Voltar
              </Link>
            </div>
          )}
          {posts &&
            posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
      </div>
      <FooterNotFixed />
    </>
  );
};

export default Search;
