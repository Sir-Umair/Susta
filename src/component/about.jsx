import React from "react"
import Navbar from "./navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import HeroPic from "../assets/abc.jpg"  // replace with your image
import { useNavigate } from "react-router"
import "./about.css" // Optional: Custom styles for About component

const About = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Profile Image */}
          <div className="col-md-4 text-center">
            <img
              src={HeroPic}
              alt="Muhammad Umair"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "220px" }}
            />
          </div>

          {/* About Text */}
          <div className="col-md-8">
            <h1 className="mb-3" style={{ color: "#007bff" }}>
              About Me
            </h1>
            <p className="lead" style={{ color: "#242424" }}>
              Assalam o Alaikum! I’m <strong>Muhammad Umair</strong>, a passionate
              learner and aspiring developer from Pakistan. I believe in
              continuous learning and enjoy transforming creative ideas into
              functional, real-world projects.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1" }}>
              My journey started with curiosity about how things work in the
              digital world — from simple websites to complex applications.
              Along the way, I’ve explored modern technologies, honed my coding
              skills, and built small projects that reflect my creativity and
              dedication.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.7" }}>
              Beyond coding, I value teamwork, problem-solving, and the drive to
              make an impact. My goal is to contribute to meaningful projects
              that not only solve problems but also inspire others.
            </p>


            <button
              type="button"
              className="btn btn-warning"
              onClick={() => navigate("/contact")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
