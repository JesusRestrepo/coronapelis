import axios from 'axios'

export const obtenerPeliculas = async (successCallback, errorCallback) => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/550?api_key=1dbd6a23f3afb3d9eee5cded1b5105ac',
    };
    await axios.request(options)
    .then(successCallback.title)
    .catch(errorCallback);
};