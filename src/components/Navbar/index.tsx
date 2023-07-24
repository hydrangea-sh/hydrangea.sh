import { Link } from "react-router-dom"

import Clamp from "../Clamp"

import "./Navbar.scss"


const Navbar = () => {
  return (
    <nav>
      <Clamp className="Navbar">
        <h1><span className="Terminal">{">"}</span> <span className="Glow">HYDRANGEA</span><span className="Terminal Flash">_</span></h1>
        <div className="Right">
          <Link to="#projects">Projects</Link>
          <Link to="#about">About</Link>
        </div>
      </Clamp>
    </nav>
  )
}

export default Navbar
