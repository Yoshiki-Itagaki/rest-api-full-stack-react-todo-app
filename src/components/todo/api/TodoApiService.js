import axios from "axios";


// export function retrieveHelloWorldBean(){
//     return  axios.get('http://localhost:8080/hello-world-bean')
    
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveAllTodosForUser = (username) => apiClient.get(`/users/${username}/todos`);