import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="absolute left-[20px] px-[24px] py-[44px] h-full bg-[var(--primary)] rounded-[var(--custom-big-radius)] flex flex-col gap-[24px] my-[var(--small-space)]">
      <Link to="/">
        <FeatherIcon icon="home" color='var(--secondary)'size='32px'/>
      </Link>
      <Link to="/form-inter">
        <FeatherIcon icon="smile" color='var(--secondary)'size='32px'/>
      </Link>
    </nav>
  );
}
