import NavBar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ListModule from "../components/ListModule";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <main
        className={`h-full flex-1 flex justify-center flex-wrap ${
          location.pathname === "/form-inter" || location.pathname === "/"
            ? "pl-[calc(var(--left-margin)*3)]"
            : "pl-[var(--left-margin)]"
        }`}
      >
        {location.pathname === "/form-inter" || location.pathname === "/" ? (
          <ListModule />
        ) : null}
        <Outlet />
      </main>
    </>
  );
}