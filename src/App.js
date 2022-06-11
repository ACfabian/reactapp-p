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
import AdminParqueadero from "./components/adminParqueadero";
import Solicitudesreserva from "./components/solicitudesReserva";
import EliminarEmpleado from "./components/eliminarEmpleado";
import CierreCaja from "./components/cierreCaja";
import AdministracionTotal from "./components/administracionTotal";
import AcreditacionSaldo from "./components/acreditacionSaldo";
import SolicitudSaldo from "./components/solicitudSaldo";
import EditarParqueadero from "./components/editarParqueadero";

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
        <Route path="/adminParqueadero" element={<AdminParqueadero />} />
        <Route path="/solicitudesReserva" element={<Solicitudesreserva />} />
        <Route path="/eliminarEmpleado" element={<EliminarEmpleado />} />
        <Route path="/cierreCaja" element={<CierreCaja />} />
        <Route path="/administracionTotal" element={<AdministracionTotal />} />
        <Route path="/acreditacionSaldo" element={<AcreditacionSaldo />} />
        <Route path="/solicitudSaldo" element={<SolicitudSaldo />} />
        <Route path="/editarParqueadero" element={<EditarParqueadero />} />    
      </Routes>
    </AuthProvider>
  );
}
