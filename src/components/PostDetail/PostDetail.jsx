import { Link } from 'react-router-dom';

import './PostDetail.css';
import useImageLoader from '../../hooks/useImageLoader';
import { useState } from 'react';
import Loading from '../Loading/Loading';

const PostDetail = ({ post }) => {
  const [imagesLoading, setImagesLoading] = useState([post.image]);
  const loading = useImageLoader(imagesLoading);
  return (
    <div className="post_detail">
      {loading && <Loading />}
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} />
      <h2>{post.subTitle}</h2>
      <div className="tags">
        {post.tags.slice(0, 2).map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btnLerMais">
        Ler mais
      </Link>
    </div>
  );
};

export default PostDetail;
