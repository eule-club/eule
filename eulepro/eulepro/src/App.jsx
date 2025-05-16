import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Impressum from "./pages/impressum";
import AGB from "./pages/agb";
import Datenschutz from "./pages/datenschutz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/impressum" element={<impressum />} />
        <Route path="/agb" element={<agb />} />
        <Route path="/datenschutz" element={<datenschutz />} />
      </Routes>
    </Router>
  );
}

export default App;
