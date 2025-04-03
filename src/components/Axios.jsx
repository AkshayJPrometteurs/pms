import axios from 'axios';
const Axios = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    withCredentials : false
});

Axios.interceptors.request.use((config)=>{
    return config;
});

Axios.interceptors.response.use(response=>{ return response; },error=>{ throw error; })

export default Axios