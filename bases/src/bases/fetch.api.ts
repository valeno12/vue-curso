import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = '2Ucmm45eamXwuNGSL86LLw2A4ZnFwZKI';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
 .then((resp) => resp.json())
 .then((body:GIFResponse) => {
    console.log(body.data.images.downsized_medium.url)
 })
 .catch( err => console.log( err));