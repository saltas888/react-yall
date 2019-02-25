import React from 'react';
import { render } from "react-dom";
import YallImg, { Provider as YallProvider } from "./lib";
import faker from 'faker';

import './index.css';

const imagesSources = [];
for(var i=0; i<50; i++) {
  imagesSources.push(faker.image.imageUrl());
}

const PLACHOLDER_IMG_URL = 'https://dummyimage.com/600x400/000/fff.png&text=placeholder';

const Images = props => (
  <div className="images-container">
    {imagesSources.map((s, id) => (
      <div key={id} style={{height: 500, width: 500}}>
        <YallImg width="100%" height="100%" src={PLACHOLDER_IMG_URL} dataSrc={s} />  
      </div>
    ))}
  </div>
); 


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <YallProvider>
      <Images />
    </YallProvider>
  </div>
);

render(<App />, document.getElementById("root"));