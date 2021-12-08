import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
