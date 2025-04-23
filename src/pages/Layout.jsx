import NavBar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ListModule from "../components/ListModule";


export default function Layout() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <main
        className="pl-[var(--left-margin)] h-full flex-1"
        style={{
          justifyContent: "center",
          display: "flex",
          // alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {location.pathname === "/form-inter" || location.pathname === "/" ? <ListModule /> : null}
        <Outlet />
      </main>
    </>
  );
}
