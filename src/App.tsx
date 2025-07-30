// App.tsx
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import DashBoard from "./pages/DashBoard";
import Homepage from "./pages/Homepage";
import StartPage from "./pages/StartPage";
import Loading from "./components/Loading";

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/get-started" element={<StartPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
