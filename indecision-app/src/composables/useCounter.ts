import { ref, computed } from "vue";

export const UseCounter = () => {

    const counter = ref(5);
    const squareCounter = computed(() => counter.value * counter.value);
    return {
        counter,
        squareCounter,
    }
}