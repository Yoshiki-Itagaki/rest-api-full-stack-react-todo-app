import { useState } from 'react';
import './Counter.css'

export default function Counter({by}) {

    const [count, setCount ] = useState(0);
    
    function incrementCounterFunction() {
        console.log('increment clicked');
        setCount(count+by);
    }
    
    function decrementCounterFunction() {
        console.log('increment clicked');
        setCount(count-by);
    }
    
    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                    onClick={incrementCounterFunction}
                >
                    +{by}
                </button>
                <button className="counterButton" 
                    onClick={decrementCounterFunction}
                >
                    -{by}
                </button>
            </div>
           
        </div>
    )
}