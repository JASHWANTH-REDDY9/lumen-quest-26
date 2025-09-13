import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RotaractWebsite from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<RotaractWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;