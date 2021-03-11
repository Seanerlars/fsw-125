import React, {useState } from 'react'

export default function AddFoodForm(props){
    const initInputs = {foodName: "" , price: "", type: ""}
    const [inputs, setInputs] = useState(initInputs)

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault()
    console.log(inputs)
    props.addFood(inputs)
    setInputs(initInputs)
}

    return (
        <form onSubmit = {handleSubmit}>
            <input 
            type="text" 
            name="foodName" 
            value={inputs.foodName} 
            onChange={handleChange} 
            placeholder="Name of Food"/>

            <input 
            type="text" 
            name="price" 
            value={inputs.price} 
            onChange={handleChange} 
            placeholder="Price of food"/>

            <input 
            type="text" 
            name="type" 
            value={inputs.type} 
            onChange={handleChange} 
            placeholder="Type of food"/>

            <button>Add Food</button>
            
        </form>
    )

}