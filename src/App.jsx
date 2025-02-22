import { useState } from 'react';
import './App.css';

// import Text from './Text';
import Button from './Button.jsx';

function App() {
  const [idset, setid] = useState(0);
  
  const cardinfo = [
    {id: 0, video: "https://videos.pexels.com/video-files/853969/853969-sd_640_360_25fps.mp4"},
    {id: 1, video: "https://videos.pexels.com/video-files/6929265/6929265-sd_640_360_30fps.mp4"},
    {id: 2, video: "https://videos.pexels.com/video-files/4158839/4158839-sd_640_360_24fps.mp4"}
  ];

  const handleMouseEnter = (id) => {
    
    setid(id);
  };
  
  
  return (
    <>
    <section>
      <div className='container02'>
        {idset !== null && (
          <video 
            src={cardinfo[idset].video} 
            key={cardinfo[idset].id} 
            className='vid' 
            muted 
            autoPlay
            loop
          >
            <source src="https://videos.pexels.com/video-files/8033215/8033215-sd_640_360_24fps.mp4" type="video/mp4"></source>
          </video>
        )}
        <div className='flex-overlay'>
        {cardinfo.map((card) => (
          <div 
            key={card.id} 
            className='flex-item' 
            onMouseEnter={() => handleMouseEnter(card.id)}
          >
          </div>
        ))}
        </div>
      </div>
      </section>
      <div className="screenshot-container">
    <div className='screenshot'>Click And Start Journalling</div>
    <Button/>
   </div>
    
    
   
   </>
  );
}

export default App;
