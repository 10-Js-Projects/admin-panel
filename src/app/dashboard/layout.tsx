import React from "react";
import Sidebar from "../components/dashboard/sidebar/sidebar";
import Navbar from "../components/dashboard/navbar/navbar";
import styles from "../components/dashboard/dashboard.module.css";
interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.navbar}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
