import { Link } from "react-router-dom";

export default function TopBanner() {
  return (
    <div className="topbanner">
      <div><h1>Bornholmer Tours</h1></div>
      <div><Link to="/login" className="link">Login</Link></div>
    </div>
  );
}
