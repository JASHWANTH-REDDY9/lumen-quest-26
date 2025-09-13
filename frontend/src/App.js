import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RotaractWebsite from "./Home";
import DashboardAIRecommendations from "./airecomendations";
import DashboardOverview from "./overview";
import DashboardBrowsePlans from "./browseplans";
import DashboardUsage from "./usage";
import MainDashboard from "./dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<RotaractWebsite />} />
        <Route path="/dashboard" element={<MainDashboard />} >
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="browse-plans" element={<DashboardBrowsePlans />} />
          <Route path="usage" element={<DashboardUsage />} />
          <Route path="ai-recommendations" element={<DashboardAIRecommendations />} />
        </Route>
        <Route path="*" element={<RotaractWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;