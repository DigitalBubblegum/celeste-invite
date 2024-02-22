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
        <form onSubmit={handleTextSubmit}>
            <input name ='text' value={text} onChange={handleTextChange} onClick={()=>setText('')}></input>
        </form>
    </div>)
}
export default Greeting