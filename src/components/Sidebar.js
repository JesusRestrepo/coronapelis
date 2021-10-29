import React from 'react'
import { Link } from 'react-router-dom'
import icono from '../img/icono.png'

import '../styles/sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="icon">
                    <h2><img src={icono} alt="icono" />Play!</h2>
                </div>
                <div className="links">
                    <Link to="/dashboard/pelis">
                        <div className="buttons">
                            <button className="btn btn-outline-primary">Películas</button> 
                        </div>
                    </Link>
                    <Link to="/dashboard/series">
                        <div className="buttons">
                            <button className="btn btn-outline-primary pr-3 pl-3">Series</button> 
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="buttons">
                            <button className="btn btn-outline-primary">Regresar</button> 
                        </div>
                    </Link>
                </div>
            </div>   
        </>
    )
}

export default Sidebar
