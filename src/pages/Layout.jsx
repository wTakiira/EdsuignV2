import NavBar from "../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import ListModule from "../components/ListModule";


export default function Layout({ children }) {
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
        <ListModule />
        <Outlet />
      </main>
    </>
  );
}
