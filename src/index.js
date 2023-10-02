import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import Portfolio from './Portfolio/Portfolio.js';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
//pages
import SkylightPage from "./Portfolio/pages/Skylight/SkylightPage";
import BundazzlePage from './Portfolio/pages/Bundazzle/BundazzlePage';
import ThirteenthPage from './Portfolio/pages/Thirteenth/ThirteenthPage';
import ConstructionPage from './Portfolio/pages/Construction/ConstructionPage';
import MiSchedulingPage from './Portfolio/pages/MiScheduling/MiSchedulingPage';
import MiBuildPage from "./Portfolio/pages/MiBuild/MibuildPage";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/portfolio/MiBuild" element={<MiBuildPage />}/>
            <Route path='/portfolio/skylight' element={<SkylightPage />} />
            <Route path='/portfolio/bundazzle' element={<BundazzlePage />} />
            <Route path='/portfolio/thirteenth' element={<ThirteenthPage />} />
            <Route path='/portfolio/construction' element={<ConstructionPage />} />
            <Route path='/portfolio/MiScheduling' element= {<MiSchedulingPage />} />
        </Routes>
    </BrowserRouter>
    
, document.querySelector('#root'));