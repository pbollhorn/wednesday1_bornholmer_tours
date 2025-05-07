import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/travels" className="link">
        Travels
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/admin" className="link">
        Admin
      </Link>
    </nav>
  );
}
