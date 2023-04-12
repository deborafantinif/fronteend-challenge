import { Routes } from "react-router";
import { Route } from "react-router-dom";

import * as pages from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home/>} />
      <Route path="/home" element={<pages.Home/>} />
      <Route path="/perfil/:username" element={<pages.Perfil />} />
      <Route path="*" element={<pages.NotFound />} />
    </Routes>
  );
}

export default AppRoutes;