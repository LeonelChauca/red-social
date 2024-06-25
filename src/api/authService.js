import axios from "axios";

const API_URL='https://retsapi-redsocial.onrender.com';

export const login=async(data)=>{
    console.log("hola")
    try{
        const response= await axios.post(`${API_URL}/api/auth/login`,data)
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

