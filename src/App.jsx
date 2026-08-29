import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="education" element={<Education />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="internships" element={<Internships />} />
                <Route path="internship" element={<Navigate to="/internships" replace />} />
                <Route path="intership" element={<Navigate to="/internships" replace />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
