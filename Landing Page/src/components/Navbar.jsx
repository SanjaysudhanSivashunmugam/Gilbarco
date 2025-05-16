import logo from '../assets/logo.svg'
import profile from '../assets/profile.svg'
export default function Navbar() {
    var user_name = "Sanjay"
    return (
        <nav className="navbar navbar-expand-lg bg-white  py-3  sticky-top">
            <div className="container ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" style={{ width: 200 + 'px' }} />
                </a>
                <a class="btn btn-primary" href="#" role="button" style={{width :"100px"}}>Login</a>
            </div>
        </nav>
    )
}