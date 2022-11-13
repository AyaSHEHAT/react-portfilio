import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  return (
   <section>
      <div className='container m-4 p-4 login-form'>
      <h3 className='mt-3'>Login</h3>
      <hr />
    <form className="row g-3 needs-validation mt-auto mb-3" novalidate> 
  <div className='col'>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Your UserName" required/>
    <div className="valid-feedback">
      Looks good!
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
  <div className="col-12">
    <div className="form-check">
     
     <p>Are you don't have an account? <a href='#'>SignUp</a></p>
    </div>
  </div>
  <div className="d-grid gap-2 col-12">
    <button className="btn" type="submit">Login</button>
  </div>
</form>
</div>

</section>
  )
}

export default Login