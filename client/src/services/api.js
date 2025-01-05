import axios from 'axios';

const API_URL = 'https://file-sharing-fchi.onrender.com';
export const uploadFile = async(data)=>{
    try{
        let response = await axios.post(`${API_URL}/upload`,data);
        // console.log("response from post request after upload ",response.data);
        return response.data;
    }catch(error){
        console.log("Error, while handling request ",error.message);
        alert("Error, while handling request ");
    } 
}