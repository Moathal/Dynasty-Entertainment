import "./style.css";
import './style.scss';


import Methods from './modules/methods.js'

const methods = new Methods;
/* const postApi =  */
const MoviesAPI = "https://anime-db.p.rapidapi.com/anime?page=1&size=30&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc"
const container = document.querySelector('.movie-list');

methods.loadData(container, MoviesAPI)