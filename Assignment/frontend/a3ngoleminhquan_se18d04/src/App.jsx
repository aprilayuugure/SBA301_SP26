import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import RoomTypeManagement from "./pages/RoomTypeManagement";
import RoomList from "./pages/RoomList";
import CustomerManagement from "./pages/CustomerManagement";
import  MainLayout  from "./layouts/MainLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Registration />} />

        <Route element={<MainLayout />}>
          <Route path = "/" element = {<Navigate to = "/rooms" replace />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path = "/rooms" element = {<RoomList />} />
          <Route path = "/manage-rooms" element = {<RoomList />} />
          <Route path = "/manage-room-types" element = {<RoomTypeManagement />} />
          <Route path = "/manage-customers" element = {<CustomerManagement />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;