import React, {useState } from 'react'

export default function AddHunterForm(props){
    const initInputs = {firstName: "" , lastName: "", type: ""}
    const [inputs, setInputs] = useState(initInputs)

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault()
    console.log(inputs)
    props.addHunter(inputs)
    setInputs(initInputs)
}

    return (
        <form onSubmit = {handleSubmit}>
            <input 
            type="text" 
            name="firstName" 
            value={inputs.firstName} 
            onChange={handleChange} 
            placeholder="Bounty Hunter Fist Name"/>

            <input 
            type="text" 
            name="lastName" 
            value={inputs.lastName} 
            onChange={handleChange} 
            placeholder="Bounty Hunter Last Name"/>

            <input 
            type="text" 
            name="type" 
            value={inputs.type} 
            onChange={handleChange} 
            placeholder="Bounty Hunter type"/>

            <button>Add Hunter</button>
            
        </form>
    )

}