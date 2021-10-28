import React from 'react'
import Sidebar from '../components/Sidebar'

import '../styles/dashboard.css'

const dashboard = () => {
    return (
        <div className="content">
            <Sidebar />
            <div className="main">
                este es el main
            </div>
        </div>
    )
}

export default dashboard
