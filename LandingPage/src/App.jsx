import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComponentProvider } from "./context/ComponentContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ComponentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ComponentProvider>
  );
}

export default App;
