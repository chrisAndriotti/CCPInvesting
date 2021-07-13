import axios from 'axios';

axios.interceptors.request.use((config) =>{
    const token = localStorage.getItem('ccp-token')
    if(!config.url.includes('login') || (config.url.includes('usuario') && config.method === 'POST') || (token))
    {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})

export default axios;