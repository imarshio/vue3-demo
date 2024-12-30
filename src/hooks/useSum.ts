import { ref } from "vue";

export default function () {
  let sum = ref(0);

  function add() {
    sum.value++;
  }

  return { sum, add };
}
