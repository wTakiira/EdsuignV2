import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="fixed left-[20px] px-[24px] py-[44px] bg-[var(--primary)] rounded-[var(--custom-big-radius)] flex flex-col gap-[24px] my-[var(--small-space)] h-[calc(100vh_-_var(--big-space))]"
    >
      <Link to="/">
        <FeatherIcon icon="home" color="var(--secondary)" size="32px" />
      </Link>
      <Link to="/form-inter">
        <FeatherIcon icon="smile" color="var(--secondary)" size="32px" />
      </Link>
      <Link to="/module-stagiaire">
        <FeatherIcon icon="book-open" color="var(--secondary)" size="32px" />
      </Link>
      <Link to="/form-stagiaire">
        <FeatherIcon icon="list" color="var(--secondary)" size="32px" />
      </Link>
    </nav>
  );
}