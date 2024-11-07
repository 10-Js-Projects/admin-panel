import React from "react";
import Sidebar from "../components/dashboard/sidebar/sidebar";
import Navbar from "../components/dashboard/navbar/navbar";
interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
