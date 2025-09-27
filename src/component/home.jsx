import React from 'react'
import Navbar from './navbar'
import HeroPic from "../assets/abc.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'   // Bootstrap import
import { Link, useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="container mt-5">
        <div className="row align-items-center justify-content-between">

          {/* Text Section */}
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
              Hi, I’m Muhammad Umair — a passionate learner and developer who enjoys
              turning ideas into practical solutions. I focus on building creative projects,
              exploring modern technologies, and continuously improving my skills.
              My goal is to create work that not only solves problems but also inspires others.
            </p>
          </div>

          {/* Image Section */}
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

      {/* Button Section */}
      <div className="text-center mt-4">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => navigate("/about")}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Home
