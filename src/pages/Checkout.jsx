import { useCart } from '../hooks/useCart.jsx';

function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <section className="checkout">
      <h2>Resumen de Compra</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
          <p><strong>Total a pagar:</strong> ${total.toFixed(2)}</p>
          {/* Aquí puedes agregar un botón para confirmar compra o integrar pago */}
        </>
      )}
    </section>
  );
}

export default Checkout;
