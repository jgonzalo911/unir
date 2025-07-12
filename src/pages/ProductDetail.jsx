import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../hooks/useCart';

function ProductDetail() {
  const { id } = useParams();
  const producto = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <section className="product-detail">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>${producto.precio}</strong></p>
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </section>
  );
}

export default ProductDetail;
