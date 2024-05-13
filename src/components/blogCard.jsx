import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (

            <div key={blog._id} className="blog-box">
              <img src={blog.image} alt="Blog Image" className="blog-image" />
              <div className="blog-content">
                <p>{blog.subject}</p>
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

export default BlogCard;