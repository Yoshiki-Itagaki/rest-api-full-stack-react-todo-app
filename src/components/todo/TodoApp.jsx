import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import LoginComponent from './LoginComponent.';
import LogoutComponent from './LogoutComponent';
import './TodoApp.css';
import WelcomeComponent from './WelcomeComponent';

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            <BrowserRouter>
                <HeaderComponent />                
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />

                    <Route path='/*' element={<ErrorComponent />} />

                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}



