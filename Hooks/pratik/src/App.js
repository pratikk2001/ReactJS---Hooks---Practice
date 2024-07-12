
import {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  const onIncrement=()=>{
    setTimeout(()=>{
      setCount(()=>count+1)
    });
  };

  return (
    <div className="App">
      <h1>My favourite color:{count}</h1>
       <button onClick={onIncrement}>Change</button>
    </div>
  );
}

export default App;
