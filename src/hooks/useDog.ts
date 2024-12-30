import { reactive, onMounted } from "vue";
import axios from "axios";
export default function () {
  let dogImageList: Array<string> = reactive([]);

  async function fetchDogImage() {
    // TODO 拦截器全局统一处理错误
    try {
      let r = await axios.get("https://dog.ceo/api/breeds/image/random");
      // console.log(r)
      // console.log(r.data)
      dogImageList.push(r.data.message);
    } catch (error) {
      alert(error);
    }
  }

  // 钩子函数调用
  onMounted(() => {
    fetchDogImage();
  });

  return {
    dogImageList,
    fetchDogImage,
  };
}
