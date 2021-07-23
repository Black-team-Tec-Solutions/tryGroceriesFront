const Navbar = () => (
    <nav className="navbar navbar-expand-lg  text-uppercase fixed-top" id="mainNav">
    <div className="container">
        <a className="text-white navbar-brand" href="#page-top">AdGroceries</a>
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1"><a className="text-white nav-link py-3 px-0 px-lg-3 rounded" href="#about">AdGroceries</a></li>
            </ul>
        </div>
    </div>
</nav>
)

export default Navbar;