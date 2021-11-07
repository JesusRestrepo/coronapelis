import React from 'react'
import tmdb from '../img/tmdb.svg'

import '../styles/footer.css'

const Footer = () => {
    return (
        <>
            <div className="powered">
                <h3>powered by: <img className="tmdb" src={tmdb} alt="tmdb"/></h3>
            </div>
        </>
    )
}

export default Footer
