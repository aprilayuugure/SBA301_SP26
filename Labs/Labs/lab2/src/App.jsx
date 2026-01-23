import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import About from './components/About'; 
import Contact from './components/Contact';
import ListOfOrchids from './components/ListOfOrchids';
import Login from './components/Login';
import OrchidDetail from './components/OrchidDetail';
import orchids from './ListOfOrchids';
import userInfo from './UserInfo';

function App() {
  const [user, setUser] = useState({...userInfo});
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (searchText) => {
      setSearchText(searchText.toLowerCase());
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/login" element = {<Login />} />
          <Route element = {<MainLayout user = {user} onSearchChange = {handleSearchChange} />} >
            <Route path = "/" element = {<Navigate to = "/orchids" replace />} />
            <Route path = "/orchids" element = {<ListOfOrchids orchids = {orchids} searchText = {searchText}/>} />
            <Route path = "/orchids/:id" element = {<OrchidDetail />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/contact" element = {<Contact userInfo = {user} />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
