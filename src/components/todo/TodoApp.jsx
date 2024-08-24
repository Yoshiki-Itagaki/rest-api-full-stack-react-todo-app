import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <LoginComponent />
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('in28minutes');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage ] = useState(false);
    const [showErrorMessage, setShowErrorMessage ] = useState(false);

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
        } else {
            console.log('failed');
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    function SuccessMessageComponent() {
        if(showSuccessMessage){
            return <div className='successMessage'>Authenticated Successfully!</div>
        }

        return null;
    }

    function ErrorMessageComponent() {
        if(showErrorMessage){
            return <div className='errorMessage'>Authentication Failed. Please check your credentials</div>
        }

        return null;
    }

    return (
        <div className='Login'>

            <SuccessMessageComponent />
            <ErrorMessageComponent />

            <div className='LoginForm'>
                <div>
                    <label>User Name</label>
                    <input type='text' name='username' value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' name='password' value={password} onChange={handlePasswordChange} />
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