import React from 'react' 



export default function Food(props){
   const { foodName, price, _id, type} = props
    return (
        
         <div clasname="food">
<h1> Name: {foodName}</h1>
<h2> Price: {price}</h2>
<h2> ID: {_id}</h2>
<h2> Type: {type} </h2>
        <button className="delete-btn"
        onClick={() => props.deleteFood(_id)}>Delete
        </button>
       
        </div>
    )
}

