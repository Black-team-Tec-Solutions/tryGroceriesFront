import React from 'react';
import './styles.css'
import logo from '../../assets/image/logo.png'
import {Link} from 'react-router-dom'

import frutas from '../../assets/image/frutas.jpeg'
import oficina from '../../assets/image/oficina.jpeg'


const Home = ({history,location,match}) => (
    <div className="home-container">
        
        <nav className="navbar navbar-expand-lg  text-uppercase" id="mainNav">
            
                <a className="text-white navbar-brand" href="#page-top">AdGroceries</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="/onboarding/firstStep">Acerca de AdGroceries</a></li>
                        
                        <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="/signup"><Link to="/signup">Registrate</Link></a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="/login"><Link to="/login">Inicia sesión</Link></a></li>
                    </ul>
                
            </div>
        </nav>

        <header className="masthead text-white text-center">
            <div className="container d-flex align-items-center flex-column cont-test">
                <img className="masthead-avatar mb-5" src={logo} height="500px" width="500px" alt="..." />
            </div> 
        </header>

        {/* <section className="page-section text-white mb-0" id="about">
            <div className="container">   
                <h2 className="page-section-heading text-center text-uppercase"><a href="#" id="#about">Acerca de AdGroceries</a></h2>
               
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className=" ms-auto"><p className="lead">Nos encanta la salud y bienestar de las personas, a favor de ello esta aplicacion
                    sera tu asistente y administrador personal de alimentos, funciona 
            como un storage virtual donde podras tener una mejor organizacion y 
            planificacion de tu stock de alimentos</p></div>

            <img className="assistant w-25 h-25" src={oficina}  alt="..." />
                    
                   </div>

                   <div className="row">
                    <div className=" ms-auto"><p className="lead">El valor que te brinda nuestra app es mayor libertad con tu tiempo
            liberate de una tarea menos y deja la administracion de tu despensa a cargo de AdGroceries</p></div>

            <img className="fruits h-50 w-50" src={frutas}  alt="..." />
                    
                   </div>
            </div>
        </section> */}

        
    </div>

)


export default Home;