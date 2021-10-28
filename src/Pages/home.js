import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/home.css'

const home = () => {
  return (
    <>
        <div className="content-home">
            <header className="header">
                <nav className="navbar">
                    <Link className="navbar-brand" to="/"><h2>Coronapelis</h2></Link>
                </nav> 
            </header>
            
            <div className="entry">
                <h1 className="h1-title">
                    Dejate llevar por la emoción <br/> peliculas, series y más.
                </h1>
                <h2 className="h2-description">
                    Disfruta cientos de peliculas y series ilimitadas <br/> desde la comodidad de tu hogar
                </h2>
                <h3 className="h3-option mt-5">
                    ¿Quieres empezar?
                </h3>
                <div className="button">
                    <Link to="/dashboard">
                        <button className="btn btn-primary btn-lg mt-2">Ingresa ahora</button>
                    </Link>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default home