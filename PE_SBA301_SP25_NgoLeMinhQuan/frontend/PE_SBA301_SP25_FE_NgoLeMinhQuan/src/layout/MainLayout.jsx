import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className = "d-flex flex-column min-vh-100">
            <NavigationBar />

            <main className = "flex-fill d-flex flex-column justify-content-center align-items-center container-fluid py-5" >
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout;