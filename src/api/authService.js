import axios from "axios";

const API_URL='';

export const login=async(data)=>{
    try{
        const response= await axios.get(`${API_URL}/`,{data},{withCredentials:true})
        return response.data;
    } catch(error){
        console.error("error de login : ",error);
        throw error;
    }
}

export const register=async(data)=>{
    try{
        const response =await axios.post(`${API_URL}/`,{data},{withCredentials:true})
        return response.data;
    } catch(error){
        console.error("error de registro :",error);
    }
}