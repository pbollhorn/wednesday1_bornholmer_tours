import "./App.css";
import TopBanner from "./components/TopBanner";
import Breadcrumbs from "./components/Breadcrumbs";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
    <TopBanner />
    <Breadcrumbs />
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
