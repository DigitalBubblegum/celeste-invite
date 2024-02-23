import { useState } from 'react'
import Greeting from './components/Greeting'

function App() {
  const [text, setText] = useState('Type some text in the text box')
  const [mem, setMem] = useState([])
  const undoFunction = () =>{
    // console.log(mem[mem.length-1])
    if(mem.length!==0){
      setText(mem[mem.length-1])
      setMem([...mem.filter((_, index) => index !== mem.length - 1)])
    }
  }
  const clearFunction = () =>{
    setText('')
  }
  return (
    <div className='bg-gray-100 h-screen w-screen'>
      <h1 className='text-3xl font-bold p-14 text-center text-indigo-800'>Celeste <span className='text-black'>Invite</span></h1>
      <div className='flex justify-center items-center'>
        <div className='p-5 border-2 border-indigo-500 border-dashed'>
          {text}
        </div>
      </div>
      <Greeting text={text} setText={setText} mem={mem} setMem = {setMem}/>
      <div className='flex justify-center items-center p-6'>
        <div className='px-4 bg-indigo-700 rounded-full py-2'>
          <button onClick={undoFunction}>undo</button>
        </div>
        <div className='px-4'></div>
        <div className='px-4 bg-indigo-700 rounded-full py-2'>
          <button onClick={clearFunction}>clear</button>
        </div>
      </div>
    </div>
  )
}

export default App
