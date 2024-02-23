import { useState } from 'react'
import Greeting from './components/Greeting'

function App() {
  const [text, setText] = useState('Type some text in the text box')
  const [mem, setMem] = useState([])
  const [isBold, setIsBold] = useState(true)
  const [isItalics, setIsItalics] = useState(false)
  const boldVariants = {
    'thin': 'font-normal',
    'bold': 'font-bold',
  }
  const italicVariants = {
    'normal': 'not-italic',
    'italic':'italic '
  }
  const undoFunction = () =>{
    // console.log(mem[mem.length-1])
    if(mem.length!==0){
      setText(mem[mem.length-1])
      setMem([...mem.filter((_, index) => index !== mem.length - 1)])
    }
  }
  const clearFunction = () => {
    setText('')
    setMem([])
  }
  const handleBold = () => {
    setIsBold(!isBold)
  }
  const handleItalic = () => {
    setIsItalics(!isItalics)
    console.log((isItalics));
  }
  return (
    <div className='bg-gray-100 h-screen w-screen'>
      <h1 className='text-3xl font-bold p-8 text-center text-indigo-800'>Celeste<span className='text-black'>Invite</span></h1>
      <div className='flex justify-center items-center p-6'>
        <div className='px-4 bg-indigo-700 rounded-full py-2 hover:bg-indigo-500 hover:-translate-y-0.5 transform transition active:bg-indigo-700'>
          <button onClick={undoFunction}>undo</button>
        </div>
        <div className='px-4'></div>
        <div className='px-4 bg-indigo-700 rounded-full py-2 hover:bg-indigo-500 hover:-translate-y-0.5 transform transition active:bg-indigo-700'>
          <button onClick={clearFunction}>clear</button>
        </div>
        <div className='px-4'></div>
        <div className='px-4 bg-indigo-700 rounded-full py-2 hover:bg-indigo-500 hover:-translate-y-0.5 transform transition active:bg-indigo-700'>
          <button onClick={handleBold}>bold</button>
        </div>
        <div className='px-4'></div>
        <div className='px-4 bg-indigo-700 rounded-full py-2 hover:bg-indigo-500 hover:-translate-y-0.5 transform transition active:bg-indigo-700'>
          <button onClick={handleItalic}>italics</button>
        </div>
      </div>
      <Greeting text={text} setText={setText} mem={mem} setMem = {setMem}/>
      <div className='flex justify-center items-center resize'>
        <div className= {`p-5 border-2 border-indigo-500 border-dashed ${boldVariants[isBold?'thin':'bold']} ${italicVariants[isItalics?'italic':'normal']}`} >
          {text}
        </div>
      </div>
    </div>
  )
}

export default App
