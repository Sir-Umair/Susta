import React from 'react'
import Navbar from './navbar'
import Pic from "../assets/facebook.jpg"
import Pic1 from "../assets/download.png"
import Pi from "../assets/t_664_instagram.jpg"
import Pi1 from "../assets/github.png"
import './contact.css'
import { useNavigate } from "react-router"

const Contact = () => {
  const navigate = useNavigate();

  const facebook = () => {
    window.open("https://www.facebook.com/share/19uWPaD7LP/", "_blank");
  }
  const linkedin = () => {
    window.open("https://www.linkedin.com/in/rana-umair-52116a2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
  }
  const instagram = () => {
    window.open("https://www.instagram.com/the_boy_m_u?igsh=anhrMWVoMnM4anVz", "_blank");
  }
  const github = () => {
    window.open("https://github.com/Sir-Umair", "_blank");
  }

  return (
    <>
      <Navbar />
      <div className="g" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "15px", cursor: "pointer" }} onClick={facebook}>
          <img src={Pic} alt="Facebook" style={{ width: "80px", height: "80px" }} />
          <p><strong>:::</strong> Follow me on Facebook <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px", cursor: "pointer" }} onClick={linkedin}>
          <img src={Pic1} alt="LinkedIn" style={{ width: "80px", height: "80px" }} />
          <p><strong>:::</strong> Connect with me on LinkedIn <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px", cursor: "pointer" }} onClick={instagram}>
          <img src={Pi} alt="Instagram" style={{ width: "80px", height: "80px" }} />
          <p><strong>:::</strong> Check out my Instagram <br /> Lorem ipsum dolor sit amet.</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px", cursor: "pointer" }} onClick={github}>
          <img src={Pi1} alt="GitHub" style={{ width: "80px", height: "80px" }} />
          <p><strong>:::</strong> View my projects on GitHub <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

      </div>

      {/* Centered Button */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => navigate("/projects")}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Contact

