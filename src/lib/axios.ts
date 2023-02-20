import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://map.naver.com/v5",
});

export default axios;
