import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="placeholder-page not-found">
            <div className="container">
                <p className="page-eyebrow">
                    Error • 404
                </p>

                <h1>Page not found.</h1>

                <p>
                    The page you are looking for does not
                    exist or may have been moved.
                </p>

                <Link
                    className="button button-primary"
                    to="/"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}

export default NotFound;