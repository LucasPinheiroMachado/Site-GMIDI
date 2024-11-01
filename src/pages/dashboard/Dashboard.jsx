import './Dashboard.css';
import { Link } from 'react-router-dom';

// hooks
import { useAuthValue } from '../../contexts/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  if (loading) {
    return <p>Carregando...</p>;
  }

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      deleteDocument(id);
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts ou crie um</p>
      <Link to="/createpost" className="btn">
        Criar post
      </Link>
      {posts && posts.length === 0 ? (
        <div className="noposts">
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className="post_header">
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div className="post_row" key={post.id}>
            <p>{post.title}</p>
            <div className="actions">
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link to={`/edit/${post.id}`} className="btn btn-outline">
                Editar
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
