 import React,{useEffect, useState} from 'react'

export const Search = (props) => { //console.log(props)
    const [input,setInput] = useState('')
     
    const handleChange=(e)=>{ //alert(input)
      setInput(e.target.value)
    }

    useEffect(()=>{
      props.onHandleInput(input)
    },[input]) 
     
  return (
    <div style={{width:'100%',margin:'20px'}}>

    <input onChange={handleChange}
    style={{padding:'10px'}} type="text" id='text' name='text' placeholder='search your country' value={input} />
    </div>
  )
}
 