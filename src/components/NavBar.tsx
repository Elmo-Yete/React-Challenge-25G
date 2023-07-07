import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="navbar-items">
        <Link to="/">Inicio</Link>
        <Link to="/articulos">Artículos</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/sobre">Sobre</Link>
        {/* Añade más enlaces según tus necesidades */}
      </div>
      <div className="navbar-search">
        {/* Aquí puedes añadir un campo de búsqueda si lo deseas */}
      </div>
      <div className="navbar-auth">
        {/* Aquí puedes añadir opciones de autenticación o perfil del usuario */}
      </div>
    </nav>
  );
}
