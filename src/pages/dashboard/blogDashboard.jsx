import React, { useEffect, useState } from 'react';
import brand from "../../assets/real-brand.png";
import profile from "../../assets/MyProfile.jpg";
import dashboard from "../../assets/dashboard.png";
import blog from "../../assets/blog.png";
import user from "../../assets/user.png";
import logout from "../../assets/logout.png";
import message from "../../assets/icons8-blog-50.png";
import { fetchBlog } from '../../redux/blogSlice';
import { useDispatch, useSelector } from "react-redux";
import BlogCardAdmin from '../../components/blogCardAdmin';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { createBlog, updateBlog } from '../../redux/blogManagementSlice';
import { Link } from 'react-router-dom';


const BlogDashboard = () => {
    const [showForm, setShowForm] = useState(false); 
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const blogdatas = useSelector(state => state.blog.data);
    const { isLoading } = useSelector(state => state.blogManagement);
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        subject: yup.string().required(),
        title: yup.string().required(),
        subtitle: yup.string().required(),
        caption: yup.string().required(),
        intro: yup.string().required(),
        content: yup.string().required(),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('subject', data.subject);
            formData.append('title', data.title);
            formData.append('subtitle', data.subtitle);
            formData.append('caption', data.caption);
            formData.append('intro', data.intro);
            formData.append('content', data.content);

     if (isEditing) {
      // If editing, dispatch the updateBlog action
         await dispatch(updateBlog({ blogId: selectedBlog._id, updatedData: formData }));
         
    } else {
      // If creating new, dispatch the createBlog action
      await dispatch(createBlog(formData));
    }

    // // Reset states after submission
    // setIsEditing(false);
    // setSelectedBlog(null);
    // setShowForm(false);
    // setSelectedFile(null);

    alert(isEditing ? "Blog updated successfully!" : "Blog created successfully!");
    window.location.reload(); 
  } catch (error) {
    console.error(error);
    alert(isEditing ? "Blog update failed!" : "Blog creation failed!");
  }
    };

    useEffect(() => {
        dispatch(fetchBlog());
    }, [dispatch]);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


        

      const handleEdit = (blog) => {
        setSelectedBlog(blog);
        setShowForm(true);
        setIsEditing(true);
      };


    return (
        <div className="">
            <div className="h-full flex gap-20 ">
                <div className="w-64  h-[900px] mt-3 bg-[#04162C]">
                    <Link to="/home"><img src={brand} alt="my-logo" className="w-24 h-24 ml-20 py-2" /></Link>
                    <span className="flex items-center gap-5 ml-4 py-4 relative">
                        <img src={profile} alt="user-profile" className="w-10 rounded-full " id="profile-image" />
                        <a href="./profilepage.html"><span className="" id="admin">Ismael</span></a>
                    </span>
                    <span className="flex items-center gap-5 ml-4 py-4">
                        <img src={dashboard} alt="dashboard icon" className="w-10" />
                        <Link to="/dashboard/dashboard" className=""><span>Dashboard</span></Link>
                    </span>
                    <span className="flex items-center gap-5 ml-4 py-4">
                        <img src={blog} alt="blog icon" className="w-10" />
                        <Link to="/dashboard/blogdashboard" className=""><span>Blogs</span></Link>
                    </span>
                    <span className="flex items-center gap-5 ml-4 py-4">
                        <img src={user} alt="blog icon" className="w-10" />
                        <Link to="/dashboard/user" className=""> <span>Users</span></Link>
                    </span>
                    <span className="flex items-center gap-5 ml-4 py-4">
                        <img src={logout} alt="logout-icon" className="w-10" />
                        <Link to="/home"><span className="" id="logoutBtns">Logout</span></Link>
                    </span>
                </div>

                <div className="">
                    <h2 id="dash-title" className='text-[#36c0c9] font-bold text-2xl pt-5'>WELCOME TO BLOG</h2>
                    <div className="flex gap-20 ">
                        <div className="bg-blue-950 w-60 p-3 rounded-lg mt-4">
                            <span className="flex flex-col gap-6 ">
                                <h3 className='font-semibold'>TOTAL BLOGS</h3>
                                <span className="flex justify-start gap-10 items-center">
                                    <img src={message} alt="blog-icon" className="w-10 " />
                                    <p id="allblogs">45</p>
                                </span>
                            </span>
                        </div>
                        <div className="bg-blue-950 w-60 p-3 rounded-lg mt-4">
                            <span className="flex flex-col gap-6 ">
                                <h3>MONTHLY BLOGS</h3>
                                <span className="flex justify-start gap-10 items-center">
                                    <img src={message} alt="blog-icon" className="w-10" />
                                    <p id="blogs">45</p>
                                </span>
                            </span>
                        </div>
                    </div>
                 
                    {showForm && (
                        <form action="" className="flex flex-col bg-blue-950 items-center pt-7 visible z-10 px-16" id="blog-form" onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="Main concept" id="main-concept" name="subject" className='w-[600px] rounded-md  h-10   pl-12 text-base text-black'  defaultValue={selectedBlog?.subject || ''} {...register("subject")} /> <br />
                            <input type="text" placeholder="Blog main title" id="btitle" name="title" className='w-[600px] rounded-md  h-10   pl-12 text-base text-black'  defaultValue={selectedBlog?.title || ''} {...register("title")} /> <br />
                            <input type="text" placeholder="Sub title" id="sub-title" name="subtitle" className='w-[600px] rounded-md  h-10   pl-12 text-base text-black'  defaultValue={selectedBlog?.subtitle || ''} {...register("subtitle")} /><br />
                            <input type="file" onChange={handleFileChange} />
                            <input type="text" id="image-caption" placeholder="Image caption" name="caption" className='w-[600px] rounded-md  h-10 mb-7  pl-12 text-base text-black'  defaultValue={selectedBlog?.caption || ''} {...register("caption")} />
                            <textarea cols="30" rows="10" placeholder="Enter blog introduction" id="blog-intro-content" name="intro" className='w-[600px] h-52 text-black'  defaultValue={selectedBlog?.intro || ''} {...register("intro")}></textarea> <br />
                            <textarea name="content" cols="30" rows="10" placeholder="Enter Blog content" id="blogContent" className='w-[600px] h-52 text-black'  defaultValue={selectedBlog?.content || ''} {...register("content")} ></textarea>
                            <button id="blogPosts" className='w-[600px] rounded-md  mt-9 h-10 pl-12 text-base bg-[#36c0c9]'> {isEditing? 'UPDATE' : 'POST'}</button>
                        </form>
                    )}
                    <div class="flex justify-between gap-[800px] absolute top-80 z-0" >
                        <h3 className="text-[#36c0c9] text-lg">List of Blogs</h3>
                        {/* Toggle the showForm state when "Create new blog" button is clicked */}
                        <button id="newBlogBtn" onClick={() => setShowForm(!showForm)} className='w-52 text-[#36c0c9] border-2 p-2 border-[#36c0c9] rounded-lg'>+ Create new blog</button>
                    </div>
                    <div class="flex gap-5 absolute top-96" id="cont">
                        {blogdatas && blogdatas.map((blog) => (
                            <BlogCardAdmin key={blog._id} blog={blog} onEdit={handleEdit}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDashboard;
