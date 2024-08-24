import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState("in28minutes");
    const [password, setPassword] = useState("");

    function handleUsernameChange(event) {
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    
    function handlePasswordChange(event) {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login">
                        login
                    </button>
                </div>
            </div>
        </div>
    )
}