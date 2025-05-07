import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="link">
        Books
      </Link>
      <Link to="/addbook" className="link">
        Add Book
      </Link>
      <Link to="/findbook" className="link">
        Find Book
      </Link>
    </nav>
  );
}
