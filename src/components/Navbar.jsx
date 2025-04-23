import FeatherIcon from 'feather-icons-react';


export default function NavBar() {
  return (
    <nav className="absolute left-[20px] h-full bg-[var(--primary)]">
      <div>
      <FeatherIcon icon="home" />
      </div>
    </nav>
  );
}
