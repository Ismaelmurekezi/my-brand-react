import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import trash from "../assets/trash.png"
import edit from "../assets/editing.png"
import { useDispatch } from "react-redux"
import { deleteBlog } from '../redux/blogManagementSlice'


const BlogCardAdmin = ({ blog,onEdit }) => {
  const dispatch = useDispatch();

    const handleEdit = () => {
    onEdit(blog);
    };

  const handleDelete = () => {
    try {
      
      dispatch(deleteBlog(blog._id));
      alert("blog deleted successfully!")
      window.location.reload()
    } catch (err) {
      alert ("Failed to delete blog")
    }  
  }
  return (

            <div key={blog._id} className="blog-box">
              <img src={blog.image} alt="Blog Image" className="blog-image" />
              <div className="blog-content">
        <p>{blog.subject}</p>
         <img src={edit} alt="edit-icon" class="icons" onClick={handleEdit}/>
        <img src={trash} alt="delete-icon" class="icons" onClick={handleDelete}></img>
                <h3>{blog.title}</h3>
                <p className="blog-descript">{blog.intro}</p>
                <span className="blog-comment">
          <i className="far fa-thumbs-up like-icon"></i>
                  <span className="like-holder">{blog.likes}</span>
          <i className="fa-regular fa-comment-dots" id="commentIcon"></i>
      <i className="far fa-comment like-icon"></i>
                        <Link to={`/blogdetail/${blog._id}`}>
                               <button className="read-more">Read More</button>
                         </Link>
                </span>
              </div>
            </div>
    


  )
}

export default BlogCardAdmin;