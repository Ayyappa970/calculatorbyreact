import './Keypad.css'
function Keypad({handleClick,allClear,clear,result}){
    return(
       <div>
        <div>
            <button onClick={()=>allClear()}>C</button>
            <button className='operator' onClick={()=>handleClick('%')}>%</button>
            <button onClick={()=>clear()}>x</button>
            <button className='operator' onClick={()=>handleClick('/')}>/</button>
        </div>
         <div>
            <button onClick={()=>handleClick("7")}>7</button>
            <button onClick={()=>handleClick("8")}>8</button>
            <button onClick={()=>handleClick("9")}>9</button>
            <button onClick={()=>handleClick("*")} className='operator'>*</button>
        </div>
        <div>
            <button onClick={()=>handleClick('4')}>4</button>
            <button onClick={()=>handleClick('5')}>5</button>
            <button onClick={()=>handleClick('6')}>6</button>
            <button onClick={()=>handleClick('-')} className='operator'>-</button>
        </div>
        <div>
            <button onClick={()=>handleClick('1')}>1</button>
            <button onClick={()=>handleClick('2')}>2</button>
            <button onClick={()=>handleClick('3')}>3</button>
            <button onClick={()=>handleClick('+')} className='operator'>+</button>
        </div>
        <div>
            <button className='oper' onClick={()=>handleClick('00')}>00</button>
            <button className='oper' onClick={()=>handleClick('0')}>0</button>
            <button className='oper' onClick={()=>handleClick('.')}>.</button>
            <button className='oper' onClick={result}>=</button>
        </div>
       </div>
    )
}
export default Keypad;