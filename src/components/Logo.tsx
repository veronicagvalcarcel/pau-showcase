// src/components/Logo.tsx
import LogoSVG from "../assets/logo.svg"
import "./Logo.css"

function Logo() {
  return <img src={LogoSVG} alt="Pau De Cerca Art" className="logo-img" />
}

export default Logo