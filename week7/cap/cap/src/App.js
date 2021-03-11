import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Food from "./components/Food"
import './index.css'
import AddFoodForm from './components/addFoodForm.js'


export default function App(){
    const [foods, setFoods] = useState([])

      function getFoods(){
        axios.get('/foods')
        .then(res => setFoods(res.data))
        .catch(err => console.log(err))
      }

    function addFood(newFood){
        axios.post('/foods', newFood)
        .then(res => {
            setFoods(prevFoods => [...prevFoods, res.data ])
        })
        .catch(err => console.log(err))
    }

    function deleteFood(foodId){
        axios.delete(`/foods/${foodId}`)
        .then(res => {
            setFoods(prevFoods => prevFoods.filter(food => food._id !== foodId))
        })
        .catch(err => console.log(err))
    }



    useEffect(() => {
        getFoods()
    }, [])

    return (
        <div className="container">
            <AddFoodForm 
                addFood={addFood}
            />
            {
            foods.map(foods => <Food 
                {...foods} 
                key={foods.foodName}
                deleteFood={deleteFood}/>)
            }
            
        </div>
    )
}