export default function ResetButton({reset}) {

    function resetCount() {
        reset();
    }
    return (
        <div>
            <button onClick={resetCount}
            className="resetButton"
            >
                Reset
            </button>
        </div>
    )
}