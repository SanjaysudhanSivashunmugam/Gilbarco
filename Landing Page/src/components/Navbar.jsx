import logo from '../assets/logo.svg'
export default function Navbar() {
    var user_name = "Sanjay"
    return (
        <nav className="navbar navbar-expand-lg bg-white  py-3  sticky-top border-bottom">
            <div className="container ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" style={{ width: 200 + 'px' }} />
                </a>
                <a class="btn text-white" href="#" role="button" style={{width :"100px", backgroundColor:"#236192"}}>Login</a>
            </div>
        </nav>
    )
}