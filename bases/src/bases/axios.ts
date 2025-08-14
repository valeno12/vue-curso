import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = '2Ucmm45eamXwuNGSL86LLw2A4ZnFwZKI';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,
    }
});

export default giphyApi;

// giphyApi.get<GIFResponse>('random')
//  .then(resp => console.log(resp))
//  .catch(err => console.log(err));