import React, { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { fetchBlog } from '../redux/blogSlice'
import {useDispatch,useSelector} from "react-redux"
import BlogCard from '../components/blogCard'




const Blog = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.blog)
  useEffect(() => {
    dispatch(fetchBlog())
  },[])
  console.log(data.data)
  const blogdata = data.data;

  return (
   <div className='container'>
           <Header/>
        <main className="blog-wrapper">
            <h1>My Blog</h1>
        <div className="blog-container">
      {blogdata && blogdata.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
          

            </div>
          </main>
           <Footer/>
          
        </div>
  )
}

export default Blog