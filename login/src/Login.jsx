import Logo from './assets/logo.svg';
import './login.css'

export default function Login() {
    return (
        <div className=" w-100 d-flex justify-content-center vh-100 align-items-center bg-section">
            <div style={{width: 550 + 'px'}} className=' border rounded-2 p-2 shadow-lg bg-white bg-opacity-75 backdrop-blur le'>
                <div className='d-flex flex-column align-items-center mt-5 mb-3'>
                    <img width={200 +"px"} src={Logo} alt="" className='mb-3' />
                    <h1 className='fs-2'>Login</h1>
                </div>
                <form className="d-flex flex-column align-items-center">
                    <div className="mb-3 w-75">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-4 w-75">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                        <a href=''>Forget Password</a>
                    </div>

                    <button type="submit" id='button' className="btn mb-4 w-25">Login</button>
                </form>
            </div>
        </div>
    )
}