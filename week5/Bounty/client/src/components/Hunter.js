import React from 'react' 



export default function Hunter(props){
   const { firstName, lastName, _id, type} = props
    return (
        
         <div clasname="hunter">
<h1> First Name: {firstName}</h1>
<h2> Last Name: {lastName}</h2>
<h3> ID: {_id}</h3>
<p> Type: {type} </p>
        <button className="delete-btn"
        onClick={() => props.deleteHunter(_id)}>Delete
        </button>
        </div>
    )
}

