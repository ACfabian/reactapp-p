import React from "react";
import { Routes, Route} from "react-router-dom";
//import { Routes, Route, HashRouter } from "react-router-dom";
import Info from "./pages/Informativa";
import Singin from "./pages/login";
import Inicio from "./pages/Inicio";
import { Registro } from "./pages/Register";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { AuthProvider } from "./Context/authContext";
import MapaIni from "./pages/MapaIni";
import MapaSec from "./pages/MapaSecund";
import MapaTercer from "./pages/MapaTercer";
import AdminParqueadero from "./pages/adminParqueadero";
import Solicitudesreserva from "./pages/solicitudesReserva";
import EliminarEmpleado from "./pages/adminEmpleado";
import CierreCaja from "./pages/ingresos";
import AdministracionTotal from "./pages/adminTotal";
import AcreditacionSaldo from "./pages/acreditacionSaldo";
import SolicitudSaldo from "./pages/solicitudSaldo";
import EditarParqueadero from "./pages/editarParqueadero";
import PlazaReservada from "./pages/plazaReservada";
import RegistroParqueadero from "./pages/registroParqueadero";
import RegistroEmpleado from "./pages/registroEmpleado";
import AdminPropietario from "./pages/adminPropietario";
import Recargar from "./pages/recargar";
import RegistroUsuario from "./pages/registroUsuario";

//<HashRouter></HashRouter>
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
          <Route path="/plazaReservada" element={<PlazaReservada />} />
          <Route path="/registroParqueadero" element={<RegistroParqueadero />} />
          <Route path="/registroEmpleado" element={<RegistroEmpleado />} />
          <Route path="/adminPropietario" element={<AdminPropietario />} />
          <Route path="/recargar" element={<Recargar />} />
          <Route path="/registroUsuario" element={<RegistroUsuario />} />
        </Routes>
      </AuthProvider>

  );
}
