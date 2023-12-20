import { useReducer } from "react";
import { useRef } from "react";
import { useEffect } from "react";
//import { useState } from "react"
//import song from './song.mp3';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case "START": 
    return {...state, isTicking: true};
    case "PAUSE": 
    return {...state, isTicking:false};
    case "RESET": 
    return {clock:0, isTicking: false};
    case "TICK":
    return {...state, clock: state.clock + 1};
    default:
    return state;
  }
}
const initialState = {
clock: 0, 
isTicking: false
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const myTimeRef = useRef(0);

  useEffect(() => {
    if (!state.isTicking) {
      return;
    }
    myTimeRef.current = setInterval(() => dispatch({type:"TICK"}), 1000);
    return () => {
      clearInterval(myTimeRef.current);
      myTimeRef.current = 0
    }
  }, [state.isTicking])
  return(
    <div className="App">
      <p>{state.clock} seconds</p>
      <button onClick={() => dispatch({type:"START"})}>START</button>
      <button onClick={() => dispatch({type:"PAUSE"})}>PAUSE</button>
      <button onClick={() => dispatch({type:"RESET"})}>RESET</button>
    </div>
  )
}
export default App;

/*function reducer(state, action) {
  switch (action.type) {
    case "MULTIPLY": return {count: state.count*5};
    case "DEVIDE": return {count: state.count/5};
    default: return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {count: 5})
  return(
    <div className="App">
      <p>{state.count}</p>
      <button onClick={() => dispatch({type: "MULTIPLY"})}>MULTIPLY</button>
      <button onClick={() => dispatch({type: "DEVIDE"})}>DEVIDE</button>
    </div>
  )
}
export default App;*/

/*function reducer(state, action) {
  switch (action.type) {
    case "ADD": return {count: state.count + 1};
    case "SUBSTRACT": return {count: state.count - 1};
    default: return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {count: 10})
  return(
    <div className="App">
      <p>{state.count}</p>
      <button onClick={() => dispatch({type: "ADD"})}>ADD</button>
      <button onClick={() => dispatch({type: "SUBSTRACT"})}>SUBSTRACT</button>
    </div>
  )
}
export default App;*/

/*function App() {
  const [musicPlay, setMusicPlay] = useState(true);
  const refAudio = useRef();
  const handlePlay = () => {
    setMusicPlay(!musicPlay)
    musicPlay ? refAudio.current.play() : refAudio.current.pause()
  }
  return(
    <div>
      <audio
        src={song}
        loop="loop"
        ref={refAudio}>      
        </audio>
      <button onClick={handlePlay}>{musicPlay ? "PLAY" : "PAUSE"}</button>
    </div>
  )
}
export default App;*/

//useEffect importieren
/*function App() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef();
  const previousCount = previousCountRef.current;
  useEffect(() => {
    previousCountRef.current = count;
  })
  return (
  <div className="App">
      <p>Current state: {count}</p>
      <p>Previous state: {previousCount} </p>
      <button onClick={() => setCount(count+1)}>Click here</button>
    </div>
  )
}
export default App;*/

/*function App() {
  const [city, setCity] = useState("")
  const inputRef = useRef()

  const changeCity = (e) => {
    setCity(e.target.value)
  }
  const focus = () => {
    inputRef.current.focus()
  }
  return (
    <div className="App">
      <input ref={inputRef} value={city} onChange={changeCity}/>
      <p>I want to go to {city}</p>
      <button onClick={focus}>UseRef</button>
    </div>
  );
}
export default App;*/
