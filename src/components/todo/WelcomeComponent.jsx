import { Link, useParams } from 'react-router-dom';

export default function WelcomeComponent() {
    const {username} = useParams();
    return (
        <div> 
            <h1>Welcome {username}</h1>            
            <div className='WelcomeComponent'>
                Manage Your Todos - <Link to='/todos'>Go Ahead</Link>
            </div>
        </div>       
    )
}
