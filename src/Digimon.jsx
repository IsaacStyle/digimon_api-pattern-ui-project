import {Link} from 'react-router-dom'

function Digimon(props) {
    return(
        <>     
        {props.digimons.map((digi,idx) => {
            return(
                <li key={idx} className='list'>
                    <Link to={`/${digi.name}`}><img src={digi.img} key={idx} alt={digi.name} className='imgs'></img></Link>
                </li>
            )
        })}
        </>
    )
}
    


export default Digimon