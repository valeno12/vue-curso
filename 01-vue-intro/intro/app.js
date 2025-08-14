const { createApp, ref} = Vue;

const app = createApp({
    // template: `
    //     <h1> {{ message }} </h1>
    //     <p>{{ author }}<p>
    // `,
    setup() {
        const message = ref("prueba123");
        const author = ref('Bruce wayne');

        const changeQuote = () => {
            message.value = 'Hola, probando';
        }
        // setTimeout(() => {
        //     message.value = "holis";
        //     author.value = "goku";
        // }, 1000)

        return {
            message,
            author,
            changeQuote
        }
    }
});

app.mount('#myApp')