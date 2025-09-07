import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-messages-interaces";
import type { YesNoResponse } from "@/interfaces/yes-no.response";
import { ref } from "vue";

export const useChat = () => {

    const messages = ref<ChatMessage[]>([]);

    const getHerResponse = async () => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }
    const onMessage = async (text : string) => {
        
   
        messages.value.push({
        id: new Date().getTime(),
        itsMine: true,
        message: text
    })

        //evaluar si termina con ?
        if(!text.endsWith('?')) return;

        await sleep();
        const {answer, image} = await getHerResponse();
        
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image: image
        })
    } 

    return {
        //properties
        messages,

        //methods
        onMessage,
    }
}