import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div class="links">
                    <Link to="/dashboard/pelis">
                        <div className="buttons">
                        <button className="btn btn-outline-primary">Películas</button> 
                        </div>
                    </Link>
                    <Link to="/dashboard/series">
                        <div className="buttons">
                        <button className="btn btn-outline-primary">Series</button> 
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
