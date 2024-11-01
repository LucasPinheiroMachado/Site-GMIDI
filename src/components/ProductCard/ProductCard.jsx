import './ProductCard.css';

const ProductCard = ({ nome, url, productUrl }) => {
  return (
    <div className="productCard">
      <img src={url} alt={nome} />
      <h2>{nome}</h2>
      <a href={productUrl}>Comprar</a>
    </div>
  );
};

export default ProductCard;
