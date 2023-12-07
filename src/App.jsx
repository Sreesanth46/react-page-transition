import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import Preview from "./components/Preview.jsx";

function App() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path="preview" element={<Preview />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default App;