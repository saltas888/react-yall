import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import { Provider as YallProvider, YallVideo, YallImg } from "./lib";
import faker from 'faker';

const PLACHOLDER_IMG_URL = 'https://dummyimage.com/600x400/000/fff.png&text=placeholder';


const imagesSources = [];
for(var i=0; i<50; i++) {
  imagesSources.push(faker.image.imageUrl());
}

const Images = props => (
  <div className="images-container">
    {imagesSources.map((s, id) => (
      <div key={id} style={{height: 500, width: 500}}>
        <YallImg
          alt={`Image ${id}`}
          width="100%"
          height="100%"
          src={PLACHOLDER_IMG_URL}
          dataSrc={s}
        />  
      </div>
    ))}
  </div>
); 

const videoSources = [];
for(var i=0; i<10; i++) {
  videoSources.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
}
const Videos = props => (
  <div className="images-container">
    {videoSources.map((s, id) => (
      <div key={id} style={{height: 500, width: 500}}>
        <YallVideo
         width="100%"
         height="100%"
         autoPlay
         src={PLACHOLDER_IMG_URL}
         dataSrc={s}
       />  
      </div>
    ))}
  </div>
); 


const App = () =>  {
  useEffect(() => {
    document.title = 'React Yall Demo';
  }, [])
  const [view, setView] = useState('images');
  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>React Yall Demo</h1>
      <nav>
      <a href="#" onClick={e => {
        setView('images');
        e.preventDefault();
      }}>Images</a>
      <a style={{marginLeft: '50px'}} href="#" onClick={e => {
        setView('videos');
        e.preventDefault();
      }}>Videos</a>
      </nav>
      <YallProvider>
      {view === 'images' && <Images />}
      {view === 'videos' && <Videos />}
      </YallProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));