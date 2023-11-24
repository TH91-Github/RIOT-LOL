import axios from 'axios';

// Axios 
export const loadAxios = async (SERVER_URL) => {
  try {
    const res = await axios.get(SERVER_URL);
    if(res.status === 200){
      return res;
    }
  }catch(error){
    console.log(error);
  }
}
