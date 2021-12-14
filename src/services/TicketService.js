import axios from "axios";

const clientApiService = axios.create({
    baseURL:'https://my-json-server.typicode.com/Neverlanders/fakejson',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
    }
})
export default{
    getEvents(){
        return clientApiService.get('/events')
    }
}