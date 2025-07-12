import { useCart } from '../hooks/useCart.jsx';
import './ProductCard.css';

function ProductCard({ producto }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(producto);
  };

  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} className="product-card__img" />
      <h3 className="product-card__title">{producto.nombre}</h3>
      <p className="product-card__price">${producto.precio}</p>
      <button 
        onClick={handleAddToCart} 
        className="product-card__btn"
        type="button"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
