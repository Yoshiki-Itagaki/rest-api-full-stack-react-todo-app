import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "./todo/api/TodoApiService";
import { useAuth } from "./todo/security/AuthContext";
import { useEffect, useState } from "react";

export default function TodoComponent() {

    const {id} = useParams();
    const [description, setDescription] = useState('');
    const authContext = useAuth();
    const username = authContext.username;

    console.log(authContext);

    useEffect(() => {
        retrieveTodos();
    }, [id])

    function retrieveTodos(){
        retrieveTodoApi(username, id)
            .then(response => {
                console.log(response);
                setDescription(response.data.description);
            })
            .catch(error => {

            })

    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    )
}