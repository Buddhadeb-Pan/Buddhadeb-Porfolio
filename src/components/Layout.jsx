import {
    Outlet,
    useLocation,
} from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";

function Layout() {
    const location = useLocation();

    return (
        <div className="site-layout">
            <Navbar />

            <main>
                <PageTransition
                    transitionKey={
                        location.pathname
                    }
                >
                    <Outlet />
                </PageTransition>
            </main>

            <Footer />
        </div>
    );
}

export default Layout;