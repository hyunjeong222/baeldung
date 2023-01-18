// import './App.css';

import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Main from './pages/main';
import Login from './pages/login';
import Join from './pages/join';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/login/*" element={<Login />}></Route>
          <Route path="/join/*" element={<Join />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
