import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="absolute left-[20px] h-full bg-[var(--primary)]">
      <Link to="/">
        <FeatherIcon icon="home" />
      </Link>
      <Link to="/form-inter">
        <FeatherIcon icon="smile" />
      </Link>
    </nav>
  );
}
