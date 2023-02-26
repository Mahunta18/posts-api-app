import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
              <Menu/>
              <Routes>
                  <Route path={'/'} element={<Home/>}/>
              </Routes>
    </BrowserRouter>
  );
}

export default App;
