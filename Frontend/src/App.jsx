import { useEffect, useState } from 'react'

import './App.css'
import axios from "axios"

function App() {
  const [data , setdata] = useState([])


  useEffect(() =>{
    axios.get(`/api/data`)
    .then((response)=>{
      setdata(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>
      Mohammed Faizan Ghani


      <p>data: {data.length}</p>
      
      {
      data.map((data,index)=> (
        <div key={index}>
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
