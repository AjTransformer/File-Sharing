import axios from 'axios';

const API_URL = 'http://localhost:8080';
export const uploadFile = async(data)=>{
    try{
        let response = await axios.post(`${API_URL}/upload`,data);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log("Error, while handling request ",error.message);
    } 
}