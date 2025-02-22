import React from 'react'
import { Link} from 'react-router-dom'
// import Item from './Item'

export default function Journalitem({item,index}) {
//   const[id,setId]=useState(1);
  return (
    <>
    {item.title&&(<li className='list-item'><Link to={`/day/${index}`}><h3>{item.title}</h3></Link></li>)}
    
    </>
  )
}
