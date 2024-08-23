import { useState } from 'react';
import './Counter.css'

export default function Counter() {

    const [count, setCount ] = useState(0);
    
    function incrementCounterFunction() {
        console.log('increment clicked');
        setCount(count+1);
    }
    
    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                    onClick={incrementCounterFunction}
                >
                    +1
                </button>
            </div>
           
        </div>
    )
}