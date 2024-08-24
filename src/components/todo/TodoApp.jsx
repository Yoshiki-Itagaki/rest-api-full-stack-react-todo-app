import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <HeaderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />

                    <Route path='/*' element={<ErrorComponent />} />

                </Routes>
            </BrowserRouter>
            <FooterComponent />
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('in28minutes');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage ] = useState(false);
    const [showErrorMessage, setShowErrorMessage ] = useState(false);

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }
    
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if(username === 'in28minutes' && password === 'dummy' ){
            console.log('success');
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            console.log('failed');
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className='Login'>
            <h1>Time to Login</h1>
            {showSuccessMessage && 
                <div className='successMessage'>
                    Authenticated Successfully!
                </div>}
            {showErrorMessage && 
                <div className='errorMessage'>
                    Authentication Failed. Please check your credentials
                </div>}

            <div className='LoginForm'>
                <div>
                    <label>User Name</label>
                    <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type='button' name='login' onClick={handleSubmit}>
                        login
                    </button>
                </div>
            </div>
        </div>
    )   

}

function WelcomeComponent() {

    const {username} = useParams();

    console.log(username);

    return (
        <div> 
            <h1>Welcome {username}</h1>            
            <div className='WelcomeComponent'>
                Manage Your Todos - <Link to='/todos'>Go Ahead</Link>
            </div>

        </div>
       
    )
}

function ErrorComponent() {
    return (
        <div className='ErrorComponent'>
            <h1>We are working that out really hard!</h1>
            <div>
                Apoligies for the 404. Reach out to our team at ABC=DEF=GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay());

    const todos = 
    [
        {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate},
    ]

    return (
        <div className='ErrorComponent'>
            <h1>Things You Want to Do</h1>
            <div>
                <table>
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

function HeaderComponent() {
    return (
        <div className='HeaderComponent'>
            Header <hr />
        </div>
    )
}

function FooterComponent() {
    return (
        <div className='FooterComponent'>
            <hr /> Footer
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className='LogoutComponent'>
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our app. Come back soon.
            </div>
        </div>
    )
}