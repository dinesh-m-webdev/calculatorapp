import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(""); 
  function calculate(){
const sample=eval(input);
console.log(sample);
const result=!Number.isFinite(sample)?"invalid":sample;
setInput(result);


    
}

function expnum(event){
  const value=event.target.value;

if(/^[0-9+\-*/.]*$/.test(value)){
  setInput(value);
}

}
function enterkey(event){
  if(event.key==="Enter"){
    if(input===""){
      setInput("");
    }
    else{
      calculate();
    }
     
  }
  if(event.key===" "){
    setInput("");
  }


}


  return (
    <>
     
       <div className='container'>
        
       <div className='head-input'>
          
     <h1>C A L C U L A T O R</h1>
      
      <input className='input-field' value={input} onChange={expnum} type="text"  onKeyDown={enterkey}/>
      </div>

      <section className='button-section'>
      <div className='calbutton'>
      <button onClick={() => setInput(input + "1")}>1</button>
      <button onClick={() => setInput(input + "2")}>2</button>
      <button onClick={() => setInput(input + "3")}>3</button>
      <button onClick={() => setInput(input + "+")}>+</button>
      </div>
      
      <div className='calbutton'>
      <button onClick={() => setInput(input + "4")}>4</button>
      <button onClick={() => setInput(input + "5")}>5</button>
      <button onClick={() => setInput(input + "6")}>6</button>
      <button onClick={() => setInput(input + "-")}>-</button>
      </div>

      <div className='calbutton'>
      <button onClick={() => setInput(input + "7")}>7</button>
      <button onClick={() => setInput(input + "8")}>8</button>
      <button onClick={() => setInput(input + "9")}>9</button>
      <button onClick={() => setInput(input + "*")}>X</button>
      </div>

      <div className='calbutton'>
      <button onClick={() => setInput("")}>C</button>
      <button onClick={() => setInput(input + "0")}>0</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => setInput(input + "/")} >/</button>
      </div>
       </section>
    </div>
    </>
  )
}

export default App
