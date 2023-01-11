import './App.css'
import Digimon from './Digimon.jsx'
import NAV from './Nav'
import { useState,useEffect } from 'react'
import { Link,Route,Routes } from 'react-router-dom'


function App() {
const [digimons,setDigimons] = useState([])


const apiCall = async() => {
  const res = await fetch(`https://digimon-api.vercel.app/api/digimon`)
  const digis = await res.json()
  setDigimons(digis)       
}

useEffect(() => {
  apiCall()
},[])

  return (
    <>

    <Routes>
      <Route path={`/`} element={
          <>
            <NAV />
            <ul>
              <Digimon digimons={digimons}/>          
            </ul>
          </>
      } />      
      {digimons.map((digi,idx) => {
        return(
        <Route key={idx} path={`/${digi.name}`} element={
          <>
            <NAV />
            <div className='popup'>
              <img src={digi.img} alt={digi.name} className='imgs2'></img>
              <h2 className='details'>Name: {digi.name} <br></br><br></br>Level: {digi.level}</h2>            
            </div>
            <ul>
              <Digimon digimons={digimons}/>          
            </ul>
          </>
      } />)
      })}
    </Routes>
    </>
  )
}

export default App;
