import styles from './Post.css';

import FooterNotFixed from '../../components/FooterNotFixed/FooterNotFixed';

// hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import useImageLoader from '../../hooks/useImageLoader';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading';
import ReactMarkdown from 'react-markdown';
import PostComplete from '../../components/PostComplete/PostComplete';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument('posts', id);

  return (
    <>
      <div className="post_container">
        {loading && <Loading />}
        {post && <PostComplete key={post.id} post={post} />}
      </div>
      <FooterNotFixed />
    </>
  );
};

export default Post;
