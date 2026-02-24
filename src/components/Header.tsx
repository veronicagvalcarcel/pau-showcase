import { useState } from "react"
import "./Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="main-nav" role="navigation" aria-label="Menú principal">
      <div className="nav-container">

        {/* Logo */}
        <a href="/" className="logo-link">PAU   DE   CERCA   ART</a>

        {/* Links de navegación */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#" onClick={closeMenu}>Sobre mi</a>
          <a href="#" onClick={closeMenu}>Colección</a>
        </div>

        {/* Botón y hamburguesa */}
        <div className="nav-actions">
          <a href="https://wa.me/XXXXXXXXXXX" className="contact-btn">
            Contacto
          </a>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Header