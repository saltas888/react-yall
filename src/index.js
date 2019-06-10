import React from 'react';
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
  videoSources.push("https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4");
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


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <YallProvider>
      <Images />
      <Videos />
    </YallProvider>
  </div>
);

render(<App />, document.getElementById("root"));