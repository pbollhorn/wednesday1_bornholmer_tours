import "./App.css";
import TopBanner from "./components/TopBanner";
import BreadcrumbPanel from "./components/BreadcrumbPanel";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
    <TopBanner />
    <BreadcrumbPanel />
      <div className="container">
        <div className="panelleft">
          <Navbar />
        </div>
        <div className="panelright">
          <Outlet />
        </div>
      </div>
    </>
  );
}
