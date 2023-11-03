// Fetch와 Axios 두 가지 타입
import axios from 'axios';

// Fetch
export const loadFetch = async (SERVER_URL) => {
  const res = await fetch(SERVER_URL, {
    method: 'get',
    headers: {
      'content-type': 'application/json'
    }
  });
  if (!res.ok) {
    const error = new Error(res.statusText);
    error.json = res.json();
    throw error;
  }
  const json = await res.json();
  return json;
}

// fetch 추가 
export const postFetch = async (SERVER_URL, postData) => {
  await fetch(SERVER_URL, {
    method:'POST',
    headers: { // 보내는 데이터가 json라는 것을 알린다
      'Content-Type': 'application/json'
    },// body에서 json 형태로 parsing
    body: JSON.stringify(postData)
  });
}
// fetch 수정
export const toggleFetch = async (SERVER_URL, putData, putOption) => {
  await fetch(`${SERVER_URL}/${putData.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...putData,
      ...putOption
    })
  });
}
// fetch 삭제
export const removeFetch = async (SERVER_URL, delData) => {
  await fetch(`${SERVER_URL}/${delData.id}`,{
    method:"DELETE",
  })
}

// Axios 확인용까지만 준비 / error 수정 및 재설정 필요
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
export const postAxios = async(SERVER_URL, postData) => { 
  await axios.post(SERVER_URL , postData)
}
export const removeAxios = async(SERVER_URL, delData) => {
  await axios.delete(SERVER_URL , delData)
}

export const putAxios = async(SERVER_URL, putData) => {
  await axios.put(SERVER_URL , putData)
}
