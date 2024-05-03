import React, {useState} from 'react'

export const TodoInput = (props) => {
    const[inputText, setinputText]= useState('')
  return (
    <div className='input-container'>
        <input type='text' placeholder='Enter your input' className='input-here' value={inputText}
        onChange={e=>{setinputText(e.target.value)
        }}/>
    
        <button className='add-btn' onClick={()=>{props.addList(inputText); setinputText("")}}>+</button>
        {/* <div>{inputText}</div> */}
    </div>
  )
}
