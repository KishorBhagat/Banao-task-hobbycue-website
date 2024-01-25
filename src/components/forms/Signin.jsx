import { useState } from 'react'
import './forms.style.css'
import IconGoogleColor from '../icons/IconGoogleColor';
import IconFacebookColor from '../icons/IconFacebookColor';

function Signin() {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <div className="auth-btns-group d-grid gap-3 mb-3">
        <button className="btn btn-outline" type="button"><IconGoogleColor /> Continue with Google</button>
        <button className="btn btn-outline" type="button"><IconFacebookColor /> Continue with Facebook</button>
      </div>
      <div className='divider'>
        <hr className='border-2'/><span>Or connect with</span>
      </div>
      <form>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 position-relative d-flex align-items-center">
          <input type={`${show?"text":"password"}`} className="form-control" placeholder="password" id="exampleInputPassword1" />
          <i className={`bi bi-eye${show?"-slash":""} position-absolute end-0 m-3`} id="togglePassword" onClick={() => setShow(!show)}></i>
        </div>
        <div className="mb-3 d-flex justify-content-between">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1"><small>Remember me</small></label>
          </div>
          <a href='#' style={{textDecoration: "none", color: "black"}}><small><i className="bi bi-lock-fill"></i> Forgot password?</small></a>
        </div>
        <button type="submit" className="btn btn-primary w-100">Continue</button>
      </form>
    </>
  )
}

export default Signin