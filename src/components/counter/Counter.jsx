import { useState } from 'react';
import CounterButton from '../CounterBotton';
import './Counter.css'
import ResetButton from './ResetButton';

export default function Counter() {

    const [count, setCount ] = useState(0);

    function increment(by) {
        setCount(count+by);
    }
    
    function decrement(by) {
        setCount(count-by);
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                increment={increment} 
                decrement={decrement}/>
            <CounterButton by={2} 
                increment={increment} 
                decrement={decrement}/>
            <CounterButton by={5} 
                increment={increment} 
                decrement={decrement}/>
            <ResetButton reset={reset} />
        </>
    )
}

