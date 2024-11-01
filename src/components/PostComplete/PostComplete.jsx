import Loading from '../Loading/Loading';
import ReactMarkdown from 'react-markdown';
import useImageLoader from '../../hooks/useImageLoader';
import { useState, useEffect } from 'react';
import './PostComplete.css';

const PostComplete = ({ post }) => {
  const [imagesLoading, setImagesLoading] = useState([post.image]);
  const loading = useImageLoader(imagesLoading);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="alingTitle">
        <h1>{post.title}</h1>
      </div>
      <img src={post.image} alt={post.title} />
      <h2 className="subTitle">{post.subTitle}</h2>
      <ReactMarkdown className="bodyPost">{post.body}</ReactMarkdown>
    </>
  );
};

export default PostComplete;
