import "./App.css";
import Layout from "./pages/Layout";
import ModuleInter from "./pages/ModuleInter";
import FormInter from "./pages/FormInter";
import ModuleStagiaire from "./pages/ModuleStagiaire";
import FormStagiaire from "./pages/FormStagiaire";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ModuleInter />} />
          <Route path="form-inter" element={<FormInter />} />
          <Route path="module-stagiaire" element={<ModuleStagiaire />} />
          <Route path="form-stagiaire" element={<FormStagiaire />} />
        </Route>
      </Routes>
  );
}

export default App;
