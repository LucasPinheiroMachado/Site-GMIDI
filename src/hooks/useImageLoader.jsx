// useImageLoader.js
import { useEffect, useState } from 'react';

const useImageLoader = (imageUrls) => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Resolve mesmo se ocorrer um erro no carregamento
        });
      });

      await Promise.all(imagePromises);
      setLoadedImages(imageUrls.length);
    };

    loadImages();
  }, [imageUrls]);

  // Adicionar/Remover classe para desabilitar scroll
  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [loading]);

  useEffect(() => {
    if (loadedImages === imageUrls.length) {
      setLoading(false);
    }
  }, [loadedImages, imageUrls.length]);

  return loading;
};

export default useImageLoader;
