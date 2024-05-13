import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import handshake from "../assets/handshake.jpg"
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userSlice';


const Login = () => {
    const dispatch=useDispatch()
    const { register, handleSubmit } = useForm();
    //  const loading = useSelector(state => state.signup.loading);

    const onSubmit = (data) => {
        dispatch(loginUser(data));
    }


    
    return (
      <div>
  <div className="flex justify-center mt-16">
    <div className="flex flex-col pt-8 w-[500px] h-[800px] pr-6 bg-[#110f45] items-center" >
      <h1 className="text-[#36c0c9] font-bold text-2xl w-full text-center ">WELCOME TO LOGIN PAGE</h1>
      <form action="" id="forms" className='flex flex-col  ' onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <i className="fa-solid fa-user" id="usericon"></i>
          <input type="email" className="w-96 rounded-md  h-10 mb-7  pl-12 text-base text-black"placeholder=" email" id="username" {...register("email")} />
          <br />
        </div>
        <div className="">
          <i className="fa-solid fa-lock" id="passwordIcon1"></i>
          <input type="password" className="w-96 rounded-md h-10 mb-7 pl-12 text-base text-black" placeholder="Password" id="password" {...register("password")}/>
          <br/>
     
              </div>
              <div className="">
             <input type="submit" className="w-96 h-10 rounded-xl font-semibold text-xl bg-[#36c0c9]" id="login" value="Login" />
              </div>

      </form>
      <p>
        Don't have an account?
        <span><Link to="/signup">Sign up</Link></span>
      </p>
    </div>
    <img src={handshake} alt="login_image" id="sign-up" className='' />
  </div>
  <button className="return-btn">
   <Link to="/home"><i className="fa-solid fa-house" id="homeIcon"></i>BACK TO HOME</Link>
        </button>
       
        </div>
  )
}

export default Login