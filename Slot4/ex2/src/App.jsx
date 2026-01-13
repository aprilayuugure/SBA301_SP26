import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'; 
import Contact from './components/Contact';
import ListOfOrchids from './components/ListOfOrchids';
import Searchbar from './components/Searchbar';
import orchids from './ListOfOrchids';
import userInfo from './UserInfo';

function App() {
  const [user, setUser] = React.useState({...userInfo});
  const [searchText, setSearchText] = React.useState('');

  const handleUserChange = (user) => {
      setUser(user);
  }

  const handleSearchChange = (searchText) => {
      setSearchText(searchText.toLowerCase());
  }

  return (
    <BrowserRouter>
      <div className = "d-flex flex-column min-vh-100">
        <Header onSearchChange = {handleSearchChange} />

        <main
          className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid py-5" 
          style = {{ marginTop: '80px' }}
        >
          <Routes>
            <Route path = "/"
              element = {
                <>
                  <h3>Welcome to React</h3>
                  <p>This is a simple React application.</p>
                </>
              }
            />
            <Route path = "/about" element = {<About />} />
            <Route path = "/orchid" element = {<ListOfOrchids orchids = {orchids} searchText = {searchText}/>} />
            <Route path = "/contact" element = {<Contact userInfo = {user} onUserChange = {handleUserChange}/>} />
          </Routes>
        </main>

        <Footer avatar = "./avatar.jpg" user = {user} />
      </div>
    </BrowserRouter>
  );
}

export default App;
