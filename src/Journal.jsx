import Journalitem from './Journalitem.jsx'
import { useCon } from './Contextprovider'
import { useNavigate } from 'react-router-dom'

export default function Journal() {
  const{items}=useCon()
  const navigate=useNavigate()
  function click(){
     navigate(-1);    

  }

  return (
    <div id="List">
        <ul>
        {items.map((item, index) => (
          <Journalitem key={index} index={index} item={item} />
        ))}

        </ul>
        <button className='vintage-button2' style={{width:"80px",marginLeft:"40px"}} onClick={click}>&larr;</button>
    </div>
  )
}
