import './css/App.css';
import React from 'react';
import Video from './component/Video';

function App() {
  return (
    <div className='app'>
      <h1>Tik Tok Clone</h1>
      <strong>ILAYDA ÖZDEMIR</strong>
      <div className='app__videos'>
        <Video />
      </div>
    </div>
  );
}

export default App;
