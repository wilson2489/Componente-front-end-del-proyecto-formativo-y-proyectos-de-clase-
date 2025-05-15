import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importamos los estilos personalizados

const Home = () => {
    return (
    <div>
      {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-bg">
        <div className="container">
            <Link className="navbar-brand" to="/">Rpromed</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/citas">Citas</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/pacientes">Pacientes</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/recetas">Recetas</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/historias-clinicas">Historial Clínico</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/logout">Cerrar Sesión</Link></li>
            </ul>
            </div>
        </div>
        </nav>

      {/* Contenido principal */}
        <section className="gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card-custom">
                <div className="card-body text-center">
                  {/* Logo */}
                    <img src="https://www.equiposmedicos.com.co/img/logo.png" alt="Logo Equipos Médicos" className="logo" width="200" />

                  {/* Título */}
                    <h2 className="mt-3 title">RPROMED - App Médica</h2>

                  {/* Botones */}
                    <Link to="/dashboard" className="btn-custom">Dashboard</Link>
                    <Link to="/citas" className="btn-custom">Citas Médicas</Link>
                    <Link to="/pacientes" className="btn-custom">Gestión de Pacientes</Link>
                    <Link to="/recetas" className="btn-custom">Recetas Médicas</Link>
                    <Link to="/historias-clinicas" className="btn-custom">Historial Clínico</Link>
                    <Link to="/logout" className="btn-custom">Cerrar Sesión</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
    );
};

export default Home;
