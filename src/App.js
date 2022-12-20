import Home from '../src/component/Home/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import React, { createContext, useState } from 'react'
import About from './component/Home/About/About';
import NotFound from './component/NotFound';
export const UserContext = createContext();

const App = () => {
  const [admin, setAdmin] = useState(false);
  const [selectedService, setSelectedService] = useState({})
  return (
    <UserContext.Provider value={{ admin, setAdmin, selectedService, setSelectedService }}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App

