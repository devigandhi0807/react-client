import React, { useState, useEffect, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { reset } from "../../../redux/auth/authSlice";
import { register } from "../../../redux/auth/authAPIService";
import { ToastContainer, toast, Zoom } from "react-toastify";
import Spinner from "../../layouts/Spinner";
import validate from "../../helper/registerationValidation";
export default function Register() {

    const { user, isError, isSuccess, isLoading, msg } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        user_name: '',
        email: '',
        password: '',
        cpassword: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

const getErrorCB= useCallback((error) => {

    if (Object.keys(error).length === 0 && isSubmit) {
     setIsSubmit(isSubmit)
    }
  },
  [isSubmit],
)
    useEffect(() => {
    getErrorCB(formErrors)

    dispatch(reset());

    }, [user, isError, isSuccess, isLoading, msg, navigate, dispatch,getErrorCB,formErrors])


    const { user_name, email, password, cpassword } = formData

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setformData({...formData, [name]: value });
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formData));
        setIsSubmit(true);
        if (password !== cpassword) {
            toast.error('Passwords do not match')
          } else {
            const userData = {
                user_name,
                email,
                password,
            }
            dispatch(register(userData)).then((res)=>{

                if(res.payload.error){
                    toast.error('Email Taken!');
                 }
                 if(isSubmit){
                     toast.success('Registered Successfully!')
                 }
            }).catch(err =>{
                toast.error(err);
                if (isError) {
                    toast.error(msg)
                }
            })
        }
    }



    if (isLoading) {
        return <Spinner />
    }
    return (

        <body className = "hold-transition login-page">

        <div className = "login-box" >
        <ToastContainer transition = { Zoom }/>
        <div className = "login-logo">
        <Link to = "/register"> <b> Well </b> Registration</Link>
        </div>
        <div className = "card" >
        <div className = "card-body login-card-body" >
        < p className = "login-box-msg" > Sign in to start your session </p>
        <form onSubmit = { handleOnSubmit }>
        <div className = "input-group mb-3">
        <input type = "text" className = "form-control" placeholder = "User Name" name = "user_name"
        value = { user_name }  onChange = { handleOnChange }/>

        <div className = "input-group-append">
        <div className = "input-group-text">
        {formErrors.user_name &&  <span class="badge badge-danger">{formErrors.user_name}</span>}
        <span className = "fas fa-user"/>

        </div>
        </div>
        </div>

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

        < div className = "input-group mb-3">
        <input type = "password" className = "form-control" placeholder = "Confirm Password"
        name = "cpassword"value = { cpassword }  onChange = { handleOnChange } />
        <div className = "input-group-append" >
        <div className = "input-group-text">
        {formErrors.cpassword &&  <span class="badge badge-danger">{formErrors.cpassword}</span>}
        <span className = "fas fa-lock" />
        </div>
        </div >
        </div>

        <div className = "row" >

        < div className = "col-12" >
        <button type = "submit" className = "btn btn-primary btn-block"> Sign Up </button>
        </div>

        </div>
        </form >

        </div>

        </div>
        </div>
        </body>
    )
}
