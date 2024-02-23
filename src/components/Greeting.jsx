const Greeting = ({text,setText,mem,setMem}) =>{
    const handleTextSubmit = (event) =>{
        event.preventDefault()
    }
    const handleTextChange = (event)=>{
        event.preventDefault()
        setText(event.target.value)
        setMem([...mem,event.target.value])
        console.log(mem)
    }
    return(
    <div>
        <form className='flex justify-center items-center p-5' onSubmit={handleTextSubmit}>
            <input className='bg-gray-100 rounded-full border-2 border-indigo-800 shadow-lg px-16 py-4' name ='text' value={text} onChange={handleTextChange} onClick={()=>setText('')}></input>
        </form>
    </div>)
}
export default Greeting