import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUserApi } from "./api/TodoApiService";
import { data } from "jquery";
import { useAuth } from "./security/AuthContext";

export default function ListTodosComponent() {

    // const today = new Date();
    // const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay());

    const authContext = useAuth();
    const username = authContext.username;

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);

    // const todos = 
    // [
    //     // {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //     // {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
    //     // {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate},
    // ]

    useEffect(() => {
        refreshTodos()
    }, [])


    function refreshTodos(){
        retrieveAllTodosForUserApi(username)
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.log(error)
            })    
    }

    function deleteTodo(id){
        deleteTodoApi(username, id)
            .then(() => {
                setMessage(`Deleted a todo with id = ${id} successfully!`)
                refreshTodos();
            })
            .catch(error => {
                console.log(error)
            })    
    }

    return (
        <div className='container'>
            <h1>Things You Want to Do</h1>
            {message && 
                <div className="alert alert-warning">{message}</div>
            }
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => {
                                return (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>    
                                    <td>{todo.done.toString()}</td>    
                                    <td>{todo.targetDate.toString()}</td>    
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                </tr>
                                
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
