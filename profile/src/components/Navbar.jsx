import logo from '../assets/logo.svg'
import profile from '../assets/profile.svg'
export default function Navbar() {
    var user_name = "Sanjay"
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 border">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" style={{ width: 200 + 'px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Suppliers
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Suppliers Reply</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Edit Suppliers</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Quotations
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">New Quotation</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">View Quotations</a></li>
                            </ul>
                        </li>
                       <li className="nav-item dropdown " >
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={profile} className='pe-2 ' style={{ width: 40 + 'px' }} alt="profile" />
                                    {user_name}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Sign Out</a></li>
                                </ul>
                            </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}