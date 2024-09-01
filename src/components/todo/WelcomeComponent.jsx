import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';

export default function WelcomeComponent() {

    const {username} = useParams();

    const [message, setMessage] = useState(null);

    function callHelloWorldRestApi(){
        console.log('called');

        // axios.get('http://localhost:8080/hello-world')
        //     .then(response => {
        //         successfulResponse(response);
        //     })
        //     .catch(error => {
        //         errorResponse(error);
        //     })
        //     .finally(() => {
        //         console.log('cleanup');
        //     })
        
        // retrieveHelloWorldBean()
        //     .then(response => {
        //         successfulResponse(response);
        //     })
        //     .catch(error => {
        //         errorResponse(error);
        //     })
        //     .finally(() => {
        //         console.log('cleanup');
        //     })
        
        retrieveHelloWorldPathVariable('King')
            .then(response => {
                successfulResponse(response);
            })
            .catch(error => {
                errorResponse(error);
            })
            .finally(() => {
                console.log('cleanup');
            })

    }

    function successfulResponse(response){
        console.log(response);
        setMessage(response.data.message);
    }
    function errorResponse(error){
        console.log(error);
        setMessage(error.data);
    }

    return (
        <div> 
            <h1>Welcome {username}</h1>            
            <div className='WelcomeComponent'>
                Manage Your Todos - <Link to='/todos'>Go Ahead</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>Call Hello World REST API</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>       
    )
}
