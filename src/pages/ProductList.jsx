import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import productsData from '../data/products.json';
import './ProductList.css';

function ProductList() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    setProductos(productsData);
  }, []);

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <section className="product-list container py-4">
      <h2 className="product-list__title mb-4">Productos</h2>
      <SearchBar onSearch={setFiltro} />
      <div className="product-list__grid">
        {productosFiltrados.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
