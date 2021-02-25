import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Hunter from "./components/Hunter"
import './index.css'
import AddHunterForm from './components/addHunterForm.js'


export default function App(){
    const [hunters, setHunters] = useState([])

    function getHunters(){
        axios.get('/hunters')
        .then(res => setHunters(res.data))
        .catch(err => console.log(err))

    }

    function addHunter(newHunter){
        axios.post('/hunters', newHunter)
        .then(res => {
            setHunters(prevHunters => [...prevHunters, res.data ])
        })
        .catch(err => console.log(err))
    }

    function deleteHunter(hunterId){
        axios.delete(`/hunters/${hunterId}`)
        .then(res => {
            setHunters(prevHunters => prevHunters.filter(hunter => hunter._id !== hunterId))
        })
        .catch(err => console.log(err))
    }



    useEffect(() => {
        getHunters()
    }, [])

    return (
        <div className="container">
            <AddHunterForm 
                addHunter={addHunter}
            />
            {
            hunters.map(hunters => <Hunter 
                {...hunters} 
                key={hunters.firstName}
                deleteHunter={deleteHunter}/>)
            }
            
        </div>
    )
}

