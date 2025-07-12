// src/pages/Returns.jsx
import React from 'react';

function Returns() {
  return (
    <div className="container mt-4">
      <h2>Devoluciones</h2>

      {/* Política de devolución */}
      <div className="alert alert-info my-4">
        <h4>Política de Devolución</h4>
        <p>
          En Artesanías MX aceptamos devoluciones en un plazo de 15 días naturales posteriores a la recepción del producto. 
          Los productos deben estar en condiciones originales, sin uso y con el embalaje intacto.
        </p>
        
      </div>

      {/* Aquí podrías mostrar la lista de pedidos para devolución */}
      <p>Aquí los usuarios podrán gestionar sus devoluciones.</p>

      {/* Ejemplo placeholder de pedidos */}
      {/* 
      <div>
        <h3>Mis Pedidos</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Bolsa tejida - $350
            <button className="btn btn-sm btn-outline-primary">Solicitar devolución</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Pulsera tejida - $120
            <button className="btn btn-sm btn-outline-primary">Solicitar devolución</button>
          </li>
        </ul>
      </div>
      */}
    </div>
  );
}

export default Returns;
