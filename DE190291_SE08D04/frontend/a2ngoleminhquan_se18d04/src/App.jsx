import { BrowserRouter } from "react-router-dom";
import {Routes, Route, Navigate, Link } from "react-router-dom";
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import News from './pages/News';
import Settings from './pages/Settings';
import Users from './pages/Users';
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/login" element = {<Login />} />
          <Route element = {<MainLayout />}>
              <Route path = "/" element = {<Navigate to = "/news" replace />} />
              <Route path = "/dashboard" element = {<Dashboard />} />
              <Route path = "/categories" element = {<Categories />} />
              <Route path = "/news" element = {<News />} />
              <Route path = "/news/:id" element = {<News />} />
              <Route path = "/users" element = {<Users />} />
              <Route path = "/settings" element = {<Settings />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
