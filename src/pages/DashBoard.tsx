import { useEffect, useState } from "react";
import SideNavbar from "@/components/SideNavbar";
import DashboardMainContent from "@/components/DashboardMainContent";

export default function DashBoard() {
  const [startupInfo, setStartupInfo] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("startupInfo");
    if (storedData) {
      setStartupInfo(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (startupInfo?.name) {
      document.title = `${startupInfo.name} - DashBoard`;
    }
  }, [startupInfo]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!startupInfo) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 dark:text-gray-300">
        <p>No startup data found. Please add your startup first.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <SideNavbar
        title={startupInfo.name}
        option1="Home"
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />
      <DashboardMainContent
        name={startupInfo.name}
        industry={startupInfo.industry}
        website={startupInfo.website}
        description={startupInfo.description}
      />
    </div>
  );
}
