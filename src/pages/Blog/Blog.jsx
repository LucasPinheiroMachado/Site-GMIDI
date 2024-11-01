// css
import './Blog.css';

// hooks
import { useNavigate } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// components
import PostDetail from '../../components/PostDetail/PostDetail';
import Loading from '../../components/Loading/Loading';
import FooterNotFixed from '../../components/FooterNotFixed/FooterNotFixed';

const Blog = () => {
  const [query, setQuery] = useState('');
  const { documents: posts, loading } = useFetchDocuments('posts');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      const normalizedQuery = query
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Remove acentos

      return navigate(`/search?q=${normalizedQuery}`);
    }
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div className="blog">
        {loading && <Loading />}
        <h1>Veja os nossos posts mais recentes:</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ou busque por tags..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Pesquisar</button>
        </form>
        <div className="posts-container">
          {' '}
          {posts &&
            posts.map((post) => <PostDetail key={post.id} post={post} />)}
          {posts && posts.length === 0 && (
            <div className="noposts">
              <p>Não foram encontrados posts</p>
            </div>
          )}
        </div>
      </div>
      <FooterNotFixed />
    </>
  );
};

export default Blog;
