import react from 'react';
import {Player} from 'video-react';
import image from './ImageInSrc.jpg';
import "video-react/dist/video-react.css"; 
import video from './ReactJS.mp4';
import './style.css'
const heading ={
  borderStyle :'solid' ,
  borderWidth : '1px' ,
  borderColor : 'black' ,
  width : '100vw'
}

function App() {
  return (
    <>
<div style={heading}>

<h1 class="title red">Your name here</h1>
<br/>
<img src="/imageInPublic.jpg" />
<br/>
<img src={image} alt="image"/>

</div>
<Player className="video"
      playsInline
      poster="/assets/poster.png"
      src={video}
    />

</>
  );
}

export default App;
