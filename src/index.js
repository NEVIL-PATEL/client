import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';

export default function Priority() {
  return (<>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/' element={<Home />}></Route>
          </Route>
      </Routes>

    </BrowserRouter>

  </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Priority />);

