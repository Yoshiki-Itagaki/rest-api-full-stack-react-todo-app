import { PropTypes} from 'prop-types'

export default function CounterButton({by, increment, decrement}) {
    
    function incrementCount() {
        increment(by);
    }
    
    function decrementCount() {
        decrement(by);
    }
    
    return (
        <div className="Counter">
            <div>
                <button className="counterButton" 
                    onClick={incrementCount}
                >
                    +{by}
                </button>
                <button className="counterButton" 
                    onClick={decrementCount}
                >
                    -{by}
                </button>
            </div>
           
        </div>
    )   
}

CounterButton.propTypes = {
    by: PropTypes.number,
}
CounterButton.defaultProps = {
    by: 1
}