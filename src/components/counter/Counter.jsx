export default function Counter() {
    
    function incrementCounterFunction() {
        console.log('increment clicked');
    }
    
    return (
        <div className="Counter">
            <span className="count">0</span>
            <button className="counterButton" onClick={incrementCounterFunction}>+1</button>
        </div>
    )
}