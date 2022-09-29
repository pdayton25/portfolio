import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import Portfolio from './Portfolio/Portfolio.js';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SkylightPage from "./Portfolio/pages/Skylight/SkylightPage";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path='/portfolio/Skylight' element={<SkylightPage />} />
        </Routes>
    </BrowserRouter>
    
, document.querySelector('#root'));