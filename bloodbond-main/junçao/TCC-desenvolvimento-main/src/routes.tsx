import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.tsx";

import Hemorest from "./pages/Hemorest";

import LogHemo from "./pages/LogHemo";

import CentralAtenH from "./pages/CentralAtendH";

import Doadorest from "./pages/Doadorest.tsx";

import DoadorLog from "./pages/DoadorLog.tsx";

import Notificaçao from "./pages/Notificação.tsx";

import Sobre from "./pages/sobre.tsx";

import CadastroNum from './pages/CadastroNum.tsx'

export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Hemorest" element={<Hemorest />} />
                <Route path="logHemo" element={<LogHemo />} />
                <Route path="CentralAtendH" element={<CentralAtenH />} />
                <Route path="Doadorest" element={<Doadorest />} />
                <Route path="DoadorLog" element={<DoadorLog />} />
                <Route path="Notificaçao" element={<Notificaçao />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="CadastroNum" element={<CadastroNum />} />
            </Routes>
        </BrowserRouter>
    );
}
