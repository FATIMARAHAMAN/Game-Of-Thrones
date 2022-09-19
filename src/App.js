import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Home from './components/home';
import React, { Component , useState } from "react";
import {
  BrowserRouter,  
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {

const [selectedMode, setSelectedMode] = useState("mode");

  return (
    <div className="App">
        <BrowserRouter>
         <Header /> 
    <Routes>
     
        <Route index element={<Home selectedMode={selectedMode} />} />
        <Route path="about" element={<About selectedMode={selectedMode} />}></Route>
        
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>,
    </div>
  );
}

export default App;
