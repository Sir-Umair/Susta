import React from 'react'
import Navbar from './navbar'
import { useNavigate } from 'react-router'


const Projects = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
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
      <div className="ccd" style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <button
          type="button"
          className="btn btn-warning"
          onClick={() => navigate("/")}
        >
          Home
        </button>

      </div>
    </div>
  )
}

export default Projects
