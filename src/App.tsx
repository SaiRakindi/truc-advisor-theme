import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Colors from './components/Colors';
import InfoColors from './components/InfoColors';

const App: React.FunctionComponent = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Colors />} />
            <Route path='/info-colors' element={<InfoColors />} />
        </Routes>
    </BrowserRouter>
);

export default App;
