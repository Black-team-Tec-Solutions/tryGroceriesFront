import React from  'react'
import "./routine.css"
import image from '../../assets/image/weight.png'
import image1 from '../../assets/image/corazon.png'
import image2 from '../../assets/image/jump.png'



const Routine = ()=>(
   

    <section className="page page-section portfolio" id="portfolio">
            <div className="container cuadroverde">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Entrenamientos</h2>
                <p className="text">Estos seran tus entrenamientos basicos para mantenerte saludable y en forma,
                    obtendras mayor condicion, fuerza y tecnica al realizar tus entrenos.
                </p>
                
                


                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid img-rounded" src={image} alt="..." />
                        </div>
                        <div className="butbot">
                        <button type="button" class="btn btn-secondary btn-lg"><a href="/workout/superior" class="text-decoration-none text-white">Tren superior</a></button>
                    </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid img-rounded"  src={image1}alt="..." />
                        </div>
                        <div className="butbot">
                        <button type="button" class="btn btn-secondary btn-lg"><a class="text-decoration-none text-white" href="/workout/inferior">Tren Inferior</a></button>
                    </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <div className="ajust">
                            <img className="img-fluid img-rounded" src={image2} alt="..." />
                        </div>
                        </div>
                        <div className="butbot1">
                        <button type="button" className="btn btn-secondary btn-lg"><a className="text-decoration-none text-white" href="/workout/cardio">Cardio HIT</a></button>
                    </div>
                    </div>
                    </div>
                    <div className="dosbotones">
                    <button type="button" className="botton btn btn-secondary btn-lg"><a className="text-decoration-none text-white" href="/onboarding">Regresar</a></button>
                    
                    <button type="button" className="botton btn btn-secondary btn-lg"><a className="text-decoration-none text-white" href="">Cerrar sesion</a></button>
                    </div>
                    
                
            </div>
        </section>
   
    

    
    
                
               
               
            

)


export default Routine
