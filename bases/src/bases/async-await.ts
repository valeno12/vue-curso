import type { GIFResponse } from "../interfaces/gif.response";
import giphyApi from "./axios";

export const getImage = async() => {
    try{
        const resp = await giphyApi.get<GIFResponse>('/random');
        return resp.data.data.images.downsized_medium.url
    }catch(error){
        throw 'url no encontrada'
    };
}; 


getImage().then((url) => console.log({url}))