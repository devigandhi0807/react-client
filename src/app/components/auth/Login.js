import React,{useState, useEffect, useCallback} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from "react-toastify";
import { reset } from "../../../redux/auth/authSlice";
import { login } from "../../../redux/auth/authAPIService";
import Spinner from "../../layouts/Spinner";
import validate from "../../helper/registerationValidation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, msg } = useSelector(
    (state) => state.auth
  )


const getErrorCB= useCallback((error) => {

    if (Object.keys(error).length === 0 && isSubmit) {
     setIsSubmit(isSubmit)
    }
  },
  [isSubmit],
)
  useEffect(() => {
    getErrorCB(formErrors)
    if (isError) {
      toast.error(msg)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, msg, navigate, dispatch, getErrorCB,formErrors])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formData));
    setIsSubmit(true);
    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <body className="hold-transition login-page">
  <div className="login-box">
  <ToastContainer transition = { Zoom }/>
  <div className="login-logo">
    <Link to="/login"><b>Well</b>Login</Link>
  </div>
   <div className="card">
  <div className="card-body login-card-body">
    <p className="login-box-msg">Login in to start your session</p>
    <form  onSubmit={handleOnSubmit}>
    <div className = "input-group mb-3">
        <input type = "email" className = "form-control" placeholder = "Email" name = "email" value = { email }  onChange = { handleOnChange }
        />
        <div className = "input-group-append">
        <div className = "input-group-text">
        {formErrors.email &&  <span class="badge badge-danger">{formErrors.email}</span>}
        <span className = "fas fa-envelope" />
        </div>
        </div>
        </div>

        <div className = "input-group mb-3" >
        <input type = "password" className = "form-control" placeholder = "Password"
        name = "password" value = { password }  onChange = { handleOnChange } />
        <div className = "input-group-append">
        <div className = "input-group-text">
        {formErrors.password &&  <span class="badge badge-danger">{formErrors.password}</span>}
        <span className = "fas fa-lock"/>
        </div>
        </div>
        </div>
      <div className="row">
        <div className="col-8">
          <div className="icheck-primary">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">
              Remember Me
            </label>
          </div>
        </div>
        {/* /.col */}
        <div className="col-4">
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        </div>
        {/* /.col */}
      </div>
    </form>
    {/* <div className="social-auth-links text-center mb-3">
      <p>- OR -</p>
      <Link to="#" className="btn btn-block btn-primary">
        <i className="fab fa-facebook mr-2" /> Sign in using Facebook
      </Link>
      <Link to="#" className="btn btn-block btn-danger">
        <i className="fab fa-google-plus mr-2" /> Sign in using Google+
      </Link>
    </div> */}
    {/* /.social-auth-links */}
    {/* <p className="mb-1">
      <Link to="forgot-password.html">I forgot my password</Link>
    </p> */}
    {/* <p className="mb-0">
      <Link to="register.html" className="text-center">Register a new user</Link>
    </p> */}
  </div>
  {/* /.login-card-body */}
</div>
</div>
</body>
  )
}
