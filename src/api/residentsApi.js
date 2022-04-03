import axios from "axios";

const residentsApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

export default residentsApi;