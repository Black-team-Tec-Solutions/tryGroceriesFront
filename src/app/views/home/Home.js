import React from 'react';
import './styles.css'
import logo from '../../assets/image/logo.png'
import {Link} from 'react-router-dom'

import frutas from '../../assets/image/frutas.jpeg'
import oficina from '../../assets/image/oficina.jpeg'


const Home = ({history,location,match}) => (
    <div className="home-container">
        
        <nav className="navbar navbar-expand-lg  text-uppercase" id="mainNav">
            <div className="container">
                <a className="text-white navbar-brand" href="#page-top">AdGroceries</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="#about">Acerca de AdGroceries</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contactanos</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="/signup"><Link to="/signup">Registrate</Link></a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="/login"><Link to="/login">Inicia sesión</Link></a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header className="masthead text-white text-center">
            <div className="container d-flex align-items-center flex-column cont-test">
                <img className="masthead-avatar mb-5" src={logo} height="500px" width="500px" alt="..." />
            </div> 
        </header>

        <section className="page-section text-white mb-0" id="about">
            <div className="container">   
                <h2 className="page-section-heading text-center text-uppercase"><a id="#about">Acerca de AdGroceries</a></h2>
               
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
        </section>

        <section className="page-section" id="contact">
            <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0"><a id="#contact">Contact Me</a></h2>
            <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                        <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>


                        </form>

                 </div>
                 </div>       
            </div>
            </section>
    </div>

)


export default Home;