import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCon } from './Contextprovider.jsx';
import "./index.css"

export default function Item() {
  const { id } = useParams(); // Get the id from the URL
  const { items} = useCon();
  const navigate=useNavigate()
  function click(){
     navigate(-1);    

  }

  // Convert the id from a string to a number
  const itemIndex = parseInt(id, 10);

  // Check if the item exists at the given index
  const item = Number.isNaN(itemIndex) || itemIndex < 0 || itemIndex >= items.length ? null : items[itemIndex];

  return (
    <div className='container2'>
      {item ? (
        <div>
          <p style={{ color: item.bg, fontFamily: item.font, fontSize: "102px",marginLeft:"15px",marginBottom:"0px",marginTop:"0px" }}>{item.title}</p>
          <p style={{ color: item.bg, fontFamily: item.font, fontSize: item.size,marginTop:"5px",marginLeft:"15px" }}>{item.topic}</p>
          <button className='vintage-button2' style={{width:"80px"}} onClick={click}>&larr;</button>
        </div>
      ) : (
        <div style={{ fontSize: "52px" }}>Item not found
        <button className='vintage-button2' style={{width:"80px"}} onClick={click}>&larr;</button></div>
      )}
    </div>
  );
}
