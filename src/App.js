import React from "react";
import { Routes, Route } from "react-router-dom";
import Info from "./components/Informativa";
import Singin from "./components/login";
import Inicio from "./components/Inicio";
import { Registro } from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./Context/authContext";
import MapaIni from "./components/MapaIni";
import MapaSec from "./components/MapaSecund";
import MapaTercer from "./components/MapaTercer";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/login" element={<Singin />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/Mapa" element={<MapaIni />} /> 
        <Route path="/MapaSec" element={<MapaSec />} />
        <Route path="/MapaTer" element={<MapaTercer />} />
          <Route path="/inicio" element={<ProtectedRoute> <Inicio /></ProtectedRoute>} />        
      </Routes>
    </AuthProvider>
  );
}
