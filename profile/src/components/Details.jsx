import profile from '../assets/profile.svg'
import { ToastContainer, toast } from 'react-toastify';
export default function Details() {
    const user = {
        name:"Sanjaysudhan",
        email:"example@gmail.com",
        id:3232382,
        role:"Team",
        phoneNumber:829898493893
    }
    const notify = () => toast("Wow so easy !");   
    
    return (
        <div className="container">
            <h1 className='my-3'>Profile & Settings</h1>
            <div className="row">
                <div className="col d-flex align-items-center gap-4 mb-4 ">
                    <img src={profile} style={{ width: 60 + 'px' }} alt=""  />
                    <h3>{user.name}</h3>
                </div>
            </div>
            <div className='row border  rounded-3 shadow-sm d-flex justify-content-center'>
                <form class="row g-3">
                    <div class="form-floating col-md-6">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Name" value={user.name} />
                        <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating col-md-6">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={user.email}/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating col-md-4">
                        <input type="text" class="form-control" id="floatingInputDisabled" placeholder="ID" value={user.id} disabled/>
                        <label for="floatingInputDisabled">ID</label>
                    </div>
                    <div class="form-floating col-md-4">
                        <input type="text" class="form-control" id="floatingInputDisabled" placeholder="Role" value={user.role} disabled/>
                        <label for="floatingInputDisabled">Role</label>
                    </div>
                    <div class="form-floating col-md-4">
                        <input type="number" class="form-control" id="floatingInput" placeholder="Phone Number" value={user.phoneNumber}/>
                        <label for="floatingInput">Phone Number</label>
                    </div>
                    
                    <div class="form-floating col-md-6">
                        <input type="password" class="form-label form-control" id="floatingInput inputPassword4" placeholder="name@example.com" />
                        <label for="inputPassword4" class="form-label">New Password</label>
                    </div>
                    <div class="form-floating col-md-6">
                        <input type="password" class="form-label form-control" id="floatingInput inputPassword4" placeholder="name@example.com" />
                        <label for="inputPassword4" class="form-label">Confirm Password</label>
                    </div>
                    <div class="col-12 me-auto">
                        <button type="submit" onClick={notify} class="btn btn-success mb-4" style={{width:"100px"}}>Save</button>
                        <ToastContainer position="top-right"/>
                    </div>
                </form>
            </div>
            <div>
                

      </div>
        </div>
    )
}