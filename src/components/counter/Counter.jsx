import { useState } from 'react';
import CounterButton from '../CounterBotton';
import './Counter.css'

export default function Counter() {

    const [count, setCount ] = useState(0);

    function incrementCounterFunction(by) {
        setCount(count+by);
    }
    
    function decrementCounterFunction(by) {
        setCount(count-by);
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                incrementMethod={incrementCounterFunction} 
                decrementMethod={decrementCounterFunction}/>
            <CounterButton by={2} 
                incrementMethod={incrementCounterFunction} 
                decrementMethod={decrementCounterFunction}/>
            <CounterButton by={5} 
                incrementMethod={incrementCounterFunction} 
                decrementMethod={decrementCounterFunction}/>
        </>
    )
}

