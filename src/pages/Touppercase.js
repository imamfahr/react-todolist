import React, {useState} from 'react'

export default function Uppercase() {
    const [textInput, setTextInput ] = useState('');

    const itemHandle = el =>{
        setTextInput(el.target.value.toUpperCase())
    }




    return (
        <div>
            <h1>{textInput}</h1>
            <input type='text' onChange={itemHandle}/>
        </div>

    )
}
