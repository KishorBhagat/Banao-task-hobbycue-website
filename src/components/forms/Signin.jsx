import { useState } from 'react'
import './forms.style.css'

function Signin() {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <div className="auth-btns-group d-grid gap-3 mb-3">
        <button className="btn btn-outline" type="button">Continue with Google</button>
        <button className="btn btn-outline" type="button">Continue with Facebook</button>
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
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary w-100">Continue</button>
      </form>
    </>
  )
}

export default Signin