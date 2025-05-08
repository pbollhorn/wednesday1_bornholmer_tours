import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <span key={crumb}>
          →
          <Link to={currentLink} className="crumb">
            {crumb}
          </Link>
        </span>
      );
    });

  return (
    <div className="breadcrumbs">
      <Link to="/" className="crumb">
        Home
      </Link>
      {crumbs}
    </div>
  );
}
