import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const SignUp = () => {
  return (
    <section>
      <div className='container m-4 p-4  login-form'>
      <h3 className='mt-3'>Sign Up</h3>
      <hr />
    <form className="row g-3 needs-validation mt-auto mb-3" novalidate>
  <div className='col'>
    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div className='col'>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div>
    <div className="input-group has-validation">
      <input type="text" className="form-control" id="validationCustomUsername" placeholder="E-mail" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div>
    <div className="input-group has-validation">
      <input type="password" className="form-control" id="validationCustomUsername" placeholder="Password" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div>
    <div className="input-group has-validation">
      <input type="password" className="form-control" id="validationCustomUsername" placeholder="Confirm your Password" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
    <div className="form-check">
     <p>Already have an account? <Link to='/login' className='link'>Login</Link></p>
    </div>
  </div>
  <div className="d-grid gap-2 col-12">
    <button className="btn" type="submit">SignUp</button>
  </div>
</form>
</div>
</section>
  )
}

export default SignUp