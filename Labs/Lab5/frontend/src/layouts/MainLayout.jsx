import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout({ user, state, dispatch, onSearchChange}) {
    return (
        <div className = "d-flex flex-column min-vh-100">
            <HomeCarousel />
            <Header state = {state} dispatch = {dispatch} onSearchChange = {onSearchChange} />

            <main className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid py-5" >
                <Outlet />
            </main>

            <Footer avatar = "/avatar.jpg" user = {user} />
        </div>
    )
}

export default MainLayout;