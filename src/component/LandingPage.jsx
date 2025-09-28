import React, { useState } from 'react'
import Navbar from './navbar'
import HeroPic from "../assets/abc.jpg"
import Pic from "../assets/facebook.jpg"
import Pic1 from "../assets/download.png"
import Pi from "../assets/t_664_instagram.jpg"
import Pi1 from "../assets/github.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'
import './contact.css'

const LandingPage = () => {
  const [showNavbar, setShowNavbar] = useState(false)

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
    <div>
      {/* Navbar - conditionally rendered */}
      {showNavbar && <Navbar />}
      
      {/* View Navigation Button - only show when navbar is hidden */}
      {!showNavbar && (
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowNavbar(true)}
          >
            View Navigation
          </button>
        </div>
      )}

      {/* Home Section */}
      <div className="container mt-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <h1 style={{ color: "#b0dae3ff" }}>Muhammad Umair</h1>
            <h2 className="text-muted" style={{ color: "#a9a9a9ff" }}>
              Welcome to my portfolio website!
            </h2>
            <p
              className="bio"
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#0e0e1fff",
                display: "block",
                textAlign: "justify"
              }}
            >
              Hi, I'm Muhammad Umair — a passionate learner and developer who enjoys
              turning ideas into practical solutions. I focus on building creative projects,
              exploring modern technologies, and continuously improving my skills.
              My goal is to create work that not only solves problems but also inspires others.
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src={HeroPic}
              alt="Umair portfolio"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "350px" }}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      {!showNavbar &&
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <img
              src={HeroPic}
              alt="Muhammad Umair"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "220px" }}
            />
          </div>
          <div className="col-md-8">
            <h1 className="mb-3" style={{ color: "#007bff" }}>
              About Me
            </h1>
            <p className="lead" style={{ color: "#242424" }}>
              Assalam o Alaikum! I'm <strong>Muhammad Umair</strong>, a passionate
              learner and aspiring developer from Pakistan. I believe in
              continuous learning and enjoy transforming creative ideas into
              functional, real-world projects.
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1" }}>
              My journey started with curiosity about how things work in the
              digital world — from simple websites to complex applications.
              Along the way, I've explored modern technologies, honed my coding
              skills, and built small projects that reflect my creativity and
              dedication.
            </p>
            <p style={{ fontSize: "17px", lineHeight: "1.7" }}>
              Beyond coding, I value teamwork, problem-solving, and the drive to
              make an impact. My goal is to contribute to meaningful projects
              that not only solve problems but also inspire others.
            </p>
          </div>
        </div>
      </div>}

      {/* Contact Section */}
       {!showNavbar &&
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ color: "#007bff" }}>Contact Me</h1>
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
      </div>}

      {/* Projects Section */}
       {!showNavbar &&
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ color: "#007bff" }}>My Projects</h1>
        <div 
          className="jk" 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            gap: "40px", 
            marginTop: "50px", 
            alignItems: "center", 
            justifyContent: "center"
          }}
        >
          <div 
            style={{
              border: "2px solid black",
              width: "200px",
              height: "200px",
              textAlign: "center",
              paddingTop: "80px",
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            Hello
          </div>

          <div 
            style={{
              border: "2px solid black",
              width: "200px",
              height: "200px",
              textAlign: "center",
              paddingTop: "80px",
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            acha g
          </div>
        </div>
      </div>}

      {/* Footer spacing */}
      <div style={{ marginBottom: "50px" }}></div>
    </div>
  )
}

export default LandingPage