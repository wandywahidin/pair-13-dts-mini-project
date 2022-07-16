import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from './pages/Home';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
