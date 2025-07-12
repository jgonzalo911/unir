// src/pages/Returns.jsx
import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';

function generateFolio() {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `DEV-${datePart}-${randomPart}`;
}

function Returns() {
  const { cart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const [folio, setFolio] = useState(null);

  const handleSelect = (productId) => {
    setSelectedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSubmit = () => {
    if (selectedItems.length === 0) return;
    const newFolio = generateFolio();
    setFolio(newFolio);
  };

  const selectedProducts = cart.filter(item => selectedItems.includes(item.id));

  return (
    <div className="container mt-4">
      <h2>Devoluciones</h2>

      <div className="alert alert-info my-4">
        <h4>Política de Devolución</h4>
        <p>
          En Artesanías MX aceptamos devoluciones en un plazo de 15 días naturales posteriores a la recepción del producto. 
          Los productos deben estar en condiciones originales, sin uso y con el embalaje intacto.
        </p>
      </div>

      <h4>Selecciona los productos a devolver:</h4>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <label className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelect(item.id)}
              />
              {item.nombre} - ${item.precio}
            </label>
          </li>
        ))}
      </ul>

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={selectedItems.length === 0}
      >
        Generar devolución
      </button>

      {folio && (
        <div className="alert alert-success mt-4">
          <h5>Solicitud de devolución generada</h5>
          <p>Tu número de folio es: <strong>{folio}</strong></p>
          <p>Los productos seleccionados son:</p>
          <ul>
            {selectedProducts.map((item) => (
              <li key={item.id}>{item.nombre} - ${item.precio}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Returns;
