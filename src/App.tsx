import DashBoard from "./pages/DashBoard";
import Homepage from "./pages/Homepage";
import StartPage from "./pages/StartPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/get-started" element={<StartPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
