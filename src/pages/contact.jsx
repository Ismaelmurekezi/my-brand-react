import Header from '../components/header'
import Footer from "../components/footer"
 import locationIc from "../assets/location.png"
 import contactIc from "../assets/call-icon.png"
import emailIc from "../assets/email-icon.png"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
// import useNavigation from 'react-router-dom'
// import { Axios } from 'axios'
 

const Contact = () => {

    const messageSchema = yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email().required(),
        message:yup.string().min(30).required()
    })
  
    const { register, handleSubmit,formState:{errors } } = useForm({
        resolver:yupResolver(messageSchema)
    });

    // const onSubmit = (data) => { 
    //     console.log(data)
    // }


 const onSubmit = async (data) => {
    try {
      const response = await fetch('https://my-brand-backend-ibtm.onrender.com/api/messages/createMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });  

      if (response.ok) {
  
        alert('Thanks, your message was sent successfully!');
        
        document.getElementById('contact-form');
    
      } else {
        alert('Failed to submit message');
      }
    } catch (error) {
      console.error('Error:', error.message);

    }
  };


    return (
      
        <div className='container'>
           <Header/>
            <main className="contact-content">

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label  className="contact-form-title">YOU CAN REACH OUT TO ME</label> <br/>
                <div className="input-group">
                        <input type="text" name="name" className="input-boxes" placeholder="Enter your name" id="contact-name"
                            {...register("name")} /><br/>
                        <small id="name-error">{ errors.name?.message}</small>
                </div>
                <div className="input-group">
                    <input type="email" name="email" className="input-boxes" placeholder="Enter your email"
                        id="contact-email"  {...register("email")}/><br/>
                    <small id="email-error">{ errors.email?.message}</small>
                </div>
                <div className="input-group">
                    <textarea name="message" className="text-area" cols="30" rows="10" placeholder="Your message"
                        id="contact-message"  {...register("message")}></textarea><br/>
                    <small id="message-error">{ errors.message?.message}</small>
                </div>
                <button id="submit-btn" value="submit">Submit</button>
                <span id="submit-error"></span>
            </form>
            <div className="vertical-line"></div>
            <div className="contact-info">
                <span className="contact-me">
                    <img src={locationIc} alt="location"/>
                    <p><span>My Location </span>KN 173 st 24</p>
                </span>
                <span className="contact-me">
                        <img src={ contactIc} alt="contact" id="call-icon"/>
                    <p><span>Phone</span> +250 781530573</p>
                </span>
                <span className="contact-me">
                    <img src={emailIc} alt="email"/>
                    <p><span>Email</span> ismaelmurekezi1@gmail.com</p>
                    </span>
                </div>
                <Footer/>
        </main>
        </div>
  )
}

export default Contact