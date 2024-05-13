import React from 'react'
import handshake from "../assets/handshake.jpg"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'; 
import { setUsername,setEmail,setPassword,setConfirmPassword,signUpUser } from '../redux/userSlice'


const Signup = () => {
    const dispatch = useDispatch(); // Get dispatch function from Redux
    const loading = useSelector(state => state.signup.loading); 


    const userschema = yup.object().shape({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null]).required()
    })

    const { register, handleSubmit,formState:{errors} } = useForm({
            resolver:yupResolver(userschema)
        });


    const onSubmit = (data) => {
        dispatch(setUsername(data.username));
        dispatch(setEmail(data.email));
        dispatch(setPassword(data.password));
        dispatch(setConfirmPassword(data.confirmPassword));
        dispatch(signUpUser(data)); 
    };
    return (
      <>
  <div class="flex justify-center mt-16">
    <img src={handshake} alt="login_image" class="login-image" id="sign-up" />

    <div className="flex flex-col pt-8 w-[500px] h-[800px] pr-6 bg-[#110f45] items-center">
      <h1 className="text-[#36c0c9] font-bold text-2xl w-full text-center ">CREATE AN ACCOUNT</h1>
      <form action="" id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <i className="fa-solid fa-user" id="usericon"></i>
          <input type="text" className="w-96 rounded-md  h-10 mb-7  pl-12 text-base text-black" placeholder="Username" id="username" {...register("username")} /> <br />
          <small className='text-red-600'>{ errors.username?.message}</small>
        </div>
        <div className="form-control">
          <i className="fa-solid fa-envelope" id="emailIcon"></i>
          <input type="email" placeholder=" Email" className="w-96 rounded-md  h-10 mb-7  pl-12 text-base text-black" id="email" {...register("email")} /> <br />
          <small className='text-red-600' >{ errors.email?.message}</small>
        </div>
        <div className="form-control">
          <i className="fa-solid fa-lock" id="passwordIcon1"></i>
          <input type="password" placeholder="Password" className="w-96 rounded-md  h-10 mb-7  pl-12 text-base text-black" id="password" {...register("password")}  />
                            <br />
         <small className='text-red-600' >{ errors.password?.message}</small>
        </div>
        <div className="form-control">
          <i className="fa-solid fa-lock" id="passwordIcon2"></i>
          <input type="password" placeholder="Confirm password" className="w-96 rounded-md  h-10 mb-7  pl-12 text-base text-black" id="confirm-password"
            {...register("confirmPassword")} />
          <br />
          <small className='text-red-600' >{ errors.confirmPassword?.message}</small>
        </div>
        <input type="submit" className="w-96 h-10 rounded-xl font-semibold text-xl bg-[#36c0c9]" value="Sign up" />
      </form>
      <p>
        Already have an account <span><Link to="/login">Login</Link></span>
      </p>
    </div>
  </div>
  <button className="return-btn">
   <Link to="/home"><i className="fa-solid fa-house" id="homeIcon"></i>BACK TO HOME</Link>

            </button>
            </>
  )
}

export default Signup;