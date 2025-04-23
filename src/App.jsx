import "./App.css";
import Layout from "./pages/Layout";
import ModuleInter from "./pages/ModuleInter";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ModuleInter />} />
        </Route>
      </Routes>
  );
}

export default App;
