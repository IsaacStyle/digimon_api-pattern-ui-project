import {useEffect,useState} from 'react'
import {Link,Route,Routes} from 'react-router-dom'

function Digimon(props) {
    // const [digimons,setDigimons] = useState([])
    // const [beeg,setBeeg] = useState('beeg')


    // const apiCall = async() => {
    //   const res = await fetch(`https://digimon-api.vercel.app/api/digimon`)
    //   const digis = await res.json()
    //   setDigimons(digis)       
    // }
    
    // useEffect(() => {
    //   apiCall()
    // },[])

    return(
    <>     
        {props.digimons.map((digi,idx) => {
            return(
            <>
                    <li key={idx} className='list'>
                        <Link to={`/${digi.name}`}><img src={digi.img} alt={digi.name} className='imgs'></img></Link>
                    </li>
            </>
            )
        })
    }
    </>
    )
    }
    


export default Digimon