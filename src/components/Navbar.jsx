import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Artesanías MX</h1>
      <ul className="navbar__links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>   {/* <- corregido */}
        <li><Link to="/cart">Carrito</Link></li>         {/* <- corregido */}
		<li><Link to="/returns">Devoluciones</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


