import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-59362/us-central1/api", // url of the api. (Cloud function)
});
export default instance