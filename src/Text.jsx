
import "./index.css";
import { Link, useNavigate } from 'react-router-dom';
import { useCon } from './Contextprovider.jsx';

export default function Text() {
  const{submit,setsubmit,font,setFont,bg,setBg,title,setTitle,textSy,setText,size,setSize,addTextToDB}=useCon()
  const navigate=useNavigate()
  function click(){
     navigate("/");    

  }
  return (
    <>
      {submit===true?(<div style={{height:"550px",background:`url('https://th.bing.com/th/id/OIP.Ndec_Mssw8vVGCyLcYpqLwHaHc?rs=1&pid=ImgDetMain') center center`,backgroundSize:"cover",paddingTop:"220px",paddingBottom:"0px"}}><Link to="/yourjournal"><button className='vintage-button2' style={{display:"block",marginLeft:"600px",marginBottom:"0px"}}>Click to see your journal</button></Link><Link to="/create"><button onClick={(e)=>setsubmit(false)} className='vintage-button2' style={{display:"block",marginTop:"20px",marginLeft:"625px"}}>Create new one</button></Link><button className='vintage-button2' style={{width:"80px",marginLeft:"660px",marginTop:"20px"}} onClick={click}>&larr;</button></div>):<div className="container">
      <textarea id="textarea2" placeholder='Enter Title'rows={1} cols={51} style={{
          color: bg,
          fontFamily: font,
          fontWeight: "bold",
          fontSize:"52px"
        }}
        value={title}
        onChange={(e)=>setTitle(e.target.value)}>
        </textarea>
        <div>
      <div id="navbar">
        <select id="fontselect" onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Brush Script MT, cursive">Brush Script</option>
        </select>
        <div className="color-box">
          <input type="color" id="colorpicker" onChange={(e) => setBg(e.target.value)} />
        </div>
        <div>
        <input type="number" style={{width:"600px"}} min={10} max={100} value={size} onChange={(e)=>setSize(Number(e.target.value))}/>
        </div>
       </div>
       </div>
        <textarea
        id="textarea"
        rows={10}
        cols={80}
        style={{
          color: bg,
          fontFamily: font,
          fontWeight: "bold",
          fontSize:size
        }}
        placeholder="Enter text"
        value={textSy}
        onChange={(e) => setText(e.target.value)}
      >
      </textarea>
      <button className="vintage-button2" onClick={addTextToDB}>Submit</button>
      <button className='vintage-button2' style={{width:"80px",marginLeft:"20px"}} onClick={click}>&larr;</button></div>}
      
      
    </>
  );
}
