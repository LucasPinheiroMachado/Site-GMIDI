import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading'; // Importe o componente de loading
import useImageLoader from '../../hooks/useImageLoader'; // Importe o hook
import './AllProducts.css';
import { useLayoutEffect } from 'react';

const AllProducts = () => {
  const productImages = [
    'https://imgur.com/8cYsNYO.jpg',
    'https://imgur.com/xBlZp5a.jpg',
    'https://imgur.com/NXKQ0t5.jpg',
    'https://imgur.com/BxpCYmc.jpg',
    'https://imgur.com/EriXiGs.jpg',
    'https://imgur.com/tomyYDP.jpg',
    'https://imgur.com/EPmTZb8.jpg',
    'https://imgur.com/qJMd2MI.jpg',
    'https://imgur.com/DfgbgU9.jpg',
    'https://imgur.com/ueWigsV.jpg',
  ];

  const loading = useImageLoader(productImages); // Utilize o hook

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="allProducts">
      {loading && <Loading />}
      <h1>Produtos GMIDI:</h1>
      <div className="productsAll">
        <ProductCard
          nome="Camisa Bob Esponja"
          url={productImages[0]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Homem-Aranha"
          url={productImages[1]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Mickey"
          url={productImages[2]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Mario"
          url={productImages[3]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Capitão América"
          url={productImages[4]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Super-Man"
          url={productImages[5]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Batman"
          url={productImages[6]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Sonic"
          url={productImages[7]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa Tio Patinhas"
          url={productImages[8]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
        <ProductCard
          nome="Camisa The Flash"
          url={productImages[9]}
          productUrl="https://mercadolivre.com/sec/15jC5YE"
        />
      </div>
    </div>
  );
};

export default AllProducts;
