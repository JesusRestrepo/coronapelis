import React from 'react'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

import '../styles/dashboard.css'

const dashboard = () => {
    return (
        <>
        <div className="content">
            <Sidebar />
            <div className="main">
                este es el main
            </div>
        </div>
        <Footer />
        </>
    )
}

export default dashboard
