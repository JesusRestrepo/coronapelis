import React, {useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import { obtenerPeliculas } from '../utils/api'

const Peliculas = () => {
    useEffect(() => {
        const fetchPeliculas = async () => {
            await obtenerPeliculas(
                (response) => {
                    console.log('se recibio', response.data.result);
                },
                (error) => {
                    console.log('ocurrio error', error)
                }
            );
        };
        fetchPeliculas();
    })

    return (
        <div className="content">
            <Sidebar />
            <div className="main">
                peliculas
            </div>
        </div>
    )
}

export default Peliculas
