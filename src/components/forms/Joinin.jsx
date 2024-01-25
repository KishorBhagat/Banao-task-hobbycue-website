import { useState } from 'react'
import './forms.style.css'
import IconGoogleColor from '../icons/IconGoogleColor';
import IconFacebookColor from '../icons/IconFacebookColor';

function Joinin() {
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
        <small className='d-block  text-center mb-3'>By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</small>
        <button type="submit" className="btn btn-primary w-100">Agree and Continue</button>
      </form>
    </>
  )
}

export default Joinin