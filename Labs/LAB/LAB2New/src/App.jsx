import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import About from './pages/About'; 
import Contact from './pages/Contact';
import ListOfOrchids from './pages/ListOfOrchids';
import Login from './pages/Login';
import OrchidDetail from './pages/OrchidDetail';
import mockAccounts from './data/MockAccounts'
import orchids from './data/Orchids';
import userInfo from './data/UserInfo';
import { initialState, loginReducer } from './store/LoginReducer';

function App() {
  const [user, setUser] = useState({...userInfo});
  const [searchText, setSearchText] = useState('');
  const [state, dispatch] = useReducer(loginReducer, initialState)

  const handleSearchChange = (searchText) => {
      setSearchText(searchText.toLowerCase());
  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/login" element = {<Login state = {state} dispatch = {dispatch} accounts = {mockAccounts} />} />
          <Route element = {<MainLayout user = {user} state = {state} dispatch = {dispatch} onSearchChange = {handleSearchChange} />} >
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
