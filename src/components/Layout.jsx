// Layout.js
import Sidebar from "./Sidebar"; // Import Sidebar
import { Outlet } from "react-router-dom"; // To render the nested page content

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - This is where the page content will be rendered */}
      <main className="flex-1 overflow-y-auto">
        <Outlet /> {/* This renders the page content based on the route */}
      </main>
    </div>
  );
};

export default Layout;
