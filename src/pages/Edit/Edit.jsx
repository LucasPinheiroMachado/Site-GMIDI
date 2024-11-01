import './Edit.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../contexts/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

const Edit = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);

  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const { user } = useAuthValue();

  const navigate = useNavigate();

  // fill form data
  useEffect(() => {
    if (post && user) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);
      setSubTitle(post.subTitle);

      console.log(post.uid);
      console.log(user.uid);

      if (post.uid !== user.uid) {
        navigate('/dashboard');
      }

      const textTags = post.tags.join(', ');

      setTags(textTags);
    }
  }, [post, user, navigate]);

  const { updateDocument, response } = useUpdateDocument('posts');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.');
      return;
    }

    // create tags array
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos os campos!');
      return;
    }

    console.log(tagsArray);

    console.log({
      title,
      subTitle,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if (formError) return;

    const data = {
      title,
      subTitle,
      image,
      body,
      tags: tagsArray,
    };

    await updateDocument(id, data);

    // redirect to home page
    navigate('/dashboard');
  };

  return (
    <div className="create_post">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Subtitulo:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom subtitulo..."
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        {!response.loading && <button className="btn">Editar post</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  );
};

export default Edit;
