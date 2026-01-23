import HomeCarousel from "./HomeCarousel";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout({ user, onSearchChange}) {
    return (
        <div className = "d-flex flex-column min-vh-100">
            <HomeCarousel />
            <Header onSearchChange = {onSearchChange} />

            <main className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid py-5" >
                <Outlet />
            </main>

            <Footer avatar = "./avatar.jpg" user = {user} />
        </div>
    )
}

export default MainLayout;