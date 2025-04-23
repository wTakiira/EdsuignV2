import NavBar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ListModule from "../components/ListModule";


export default function Layout() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <main
        className="h-full flex-1"
        style={{
          justifyContent: "center",
          display: "flex",
          // alignItems: "center",
          flexWrap: "wrap",
          paddingLeft: location.pathname === "/form-inter" || location.pathname === "/" ? "calc(var(--left-margin) * 3 + var(--small-space))" : "var(--left-margin)",
        }}
      >
        {location.pathname === "/form-inter" || location.pathname === "/" ? <ListModule /> : null}
        <Outlet />
      </main>
    </>
  );
}
