import React from 'react'
import { Link } from 'react-router'
import './navbar.css'

const Navbar = () => {
  return (
    <div 
      className="nv"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 50px",
        backgroundColor: "#242424",
        color: "white",
        margin: "0"
      }}
    >
      <h2 className="logo"style={{color: "rgba(182, 222, 236, 1)"}}>My Portfolio</h2>
      <ul style={{ display: "flex", listStyleType: "none", gap: "20px", margin: 0, padding: 0 ,animation:"alternate-reverse 3s ease-in-out infinite"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
