import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="panelleft"><Navbar /></div>
        <div className="panelright"><Outlet /></div>
      </div>
    </>
  );
}
