import { useState } from 'react'
import Greeting from './components/Greeting'

function App() {
  const [text, setText] = useState('Type some text in the text box')
  const [mem, setMem] = useState([])
  const undoFunction = () =>{
    // console.log(mem[mem.length-1])
    setText(mem[mem.length-1])
    setMem([...mem.filter((_, index) => index !== mem.length - 1)])
  }
  return (
    <>
      <h1>Celeste Invite</h1>
      {text}
      <Greeting text={text} setText={setText} mem={mem} setMem = {setMem}/>
      <button onClick={undoFunction}>undo</button>
      <button>redo</button>
    </>
  )
}

export default App
