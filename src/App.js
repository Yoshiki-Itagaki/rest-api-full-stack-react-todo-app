import './App.css';
import Counter from './components/counter/Counter';

export default function App() {
  return (
    <div className="App">
       <Counter/>
       <Counter by={2}/>
       <Counter by={5}/>
    </div>
  )

  function PlayingWithProps(){
    return (
      <div>Props</div>
    )
  }
}