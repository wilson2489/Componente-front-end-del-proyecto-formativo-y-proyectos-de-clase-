import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/citas" element={<h1>Citas Médicas</h1>} />
        <Route path="/pacientes" element={<h1>Gestión de Pacientes</h1>} />
        <Route path="/recetas" element={<h1>Recetas Médicas</h1>} />
        <Route path="/historias-clinicas" element={<h1>Historial Clínico</h1>} />
        <Route path="/logout" element={<h1>Cerrar Sesión</h1>} />
        </Routes>
    </Router>
    );
}

export default App;

