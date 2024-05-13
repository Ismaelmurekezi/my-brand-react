import React from 'react'

const Moredetail = ({blog}) => {
  return (
  <div className="more-detail-blog">
              {console.log(blog)}
          <div class="blog-post-content">
   <p>{ blog?.subject}</p>
    <h2>{blog?.title}</h2>
    <p class="blog-titles" id="header2">{blog?.subtitle}</p>
    <article class="article">{blog?.intro}</article>
    <article class="article">{blog?.content}</article>
    </div>
    <figure class="blog-image-container">
    <img src={blog?.image} alt="blogimage" class="blog-image1"/>
   <figcaption><i>{blog?.caption}</i></figcaption>
    </figure>

    </div>
  )
}

export default Moredetail