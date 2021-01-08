import './css/App.css';
import React from 'react';
import Video from './component/Video';

function App() {
  return (
    <div className='app'>
      <center>
        <div className='app__videos'>
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
      </center>
    </div>
  );
}

export default App;
