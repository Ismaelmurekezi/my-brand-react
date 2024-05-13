import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import { useParams } from 'react-router-dom';
import  Axios  from 'axios';
import Moredetail from '../components/moredetail';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { addComment, addLike } from '../redux/blogInteractSlice';
import {useDispatch,useSelector} from "react-redux"



const BlogDetail = ({ match }) => {

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch();
    
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await Axios.get(`https://my-brand-backend-ibtm.onrender.com/api/blog/getBlogById/${id}`);
          if (response.data) {
          setBlog(response.data);
        } else {
          console.error('No data found for this blog ID');
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [id]); 


  //function to submit

  const onSubmitComment = (data) => {
    dispatch(addComment({ blogId: id, commentData: data }));
    alert("Feedback sent successfully")
  };

  return (
  <div className="container">
       
<Header/>
        <div className="blog-detail-wrapper">
              <div className="blog-contents">
                  
                  {/* Dynamic blog content */}
                  <Moredetail blog={blog} />
            </div>

            <div className="blog-form">

                <h3>YOUR FEEDBACK IS OF GREAT VALUE TO US</h3>
                <form action="" onSubmit={handleSubmit(onSubmitComment)}>
                    <div className="input-group">
              <input type="text" placeholder=" Enter Full Name" id="username" {...register("username")} className='text-black'/><br/>
                        <small id="name-error"></small>
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Enter  email" id="email" {...register("email")} className='text-black'/> <br/>
                        <small id="email-error"></small>
                    </div>
                    <div className="input-group">
                        <textarea name="message" id="contact-message" className="text-area" cols="30" rows="10"
                            placeholder="Your message" {...register("message")}></textarea><br/>
                        <small id="message-error"></small>
                    </div>
                    <button id="submit-btn">Submit</button>
                    <small id="submit-error"></small>
                </form>
            </div>

            <h3 className="comment-title">Comments</h3>
            <div className="comments-container">
        
            </div>

        </div>
        </div>
  )
}
export default BlogDetail