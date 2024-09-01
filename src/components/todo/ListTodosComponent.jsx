import { useEffect, useState } from "react";
import { retrieveAllTodosForUser } from "./api/TodoApiService";
import { data } from "jquery";

export default function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay());

    const [todos, setTodos] = useState([]);

    // const todos = 
    // [
    //     // {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //     // {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
    //     // {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate},
    // ]

    function refreshTodos(){
        retrieveAllTodosForUser('in28minutes')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => {
                console.log(error)
            })    
    }

    useEffect(() => {
        refreshTodos()
    }, [])

    return (
        <div className='container'>
            <h1>Things You Want to Do</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => {
                                return (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>    
                                    <td>{todo.done.toString()}</td>    
                                    <td>{todo.targetDate.toString()}</td>    
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
