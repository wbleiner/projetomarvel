import React from 'react';

import './App.css';
import Navbar from './Components/Layouts/Navbar';
import Content from './Components/Layouts/Content';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
