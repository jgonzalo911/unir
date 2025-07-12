import { useCart } from '../hooks/useCart.jsx';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  // Calcula total
  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  const handleComprar = () => {
    navigate('/checkout');
  };

  return (
    <section className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p><strong>Total: </strong>${total.toFixed(2)}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={handleComprar} style={{ marginLeft: '10px' }}>
            Comprar
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;
