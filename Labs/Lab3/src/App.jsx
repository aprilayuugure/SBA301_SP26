import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import { useOrchidList } from './hooks/useOrchidList';

import MainLayout from "./layouts/MainLayout";

import About from './pages/About'; 
import Contact from './pages/Contact';
import ListOfOrchids from './pages/ListOfOrchids';
import Login from './pages/Login';
import OrchidDetail from './pages/OrchidDetail';
import OrchidForm from './pages/OrchidForm';
  
import mockAccounts from './data/MockAccounts'
import userInfo from './data/UserInfo';

import { loginInitialState, loginReducer } from './store/LoginReducer';
import { orchidInitialState, orchidReducer } from './store/OrchidReducer';

function App() {
  const [user, setUser] = useState({...userInfo});
  const [searchText, setSearchText] = useState('');
  const orchids = useOrchidList();
  const [loginState, loginDispatch] = useReducer(loginReducer, loginInitialState);
  const [orchidState, orchidDispatch] = useReducer(orchidReducer, orchidInitialState);

  const handleSearchChange = (searchText) => {
      setSearchText(searchText.toLowerCase());
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/login" element = {<Login state = {loginState} dispatch = {loginDispatch} accounts = {mockAccounts} />} />
          <Route element = {<MainLayout user = {user} state = {loginState} dispatch = {loginDispatch} onSearchChange = {handleSearchChange} />} >
            <Route path = "/" element = {<Navigate to = "/orchids" replace />} />
            <Route path = "/orchids" element = {<ListOfOrchids orchids = {orchids} searchText = {searchText}/>} />
            <Route path = "/orchids/:id" element = {<OrchidDetail state = {orchidState} dispatch = {orchidDispatch} />} />
            <Route path = "orchid/add" element = {<OrchidForm state = {orchidState} dispatch = {orchidDispatch} />} />
            <Route path = "orchid/update/:id" element = {<OrchidForm state = {orchidState} dispatch = {orchidDispatch} />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact userInfo = {user} />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
