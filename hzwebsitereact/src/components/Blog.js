import React from 'react';
import "../css/Blog.css";
import BlogPost from "./BlogPost"

function Blog() {
    return (
        <div className="blog">

            <BlogPost title="HTML5 best practices; section/header/aside/article elements" 
            link="https://stackoverflow.com/questions/4781077/html5-best-practices-section-header-aside-article-elements"/>
            
            <BlogPost title="programmering ervaring" link="/blogpost/progervaring"/>

            <BlogPost title="Studiekeuze" link="/blogpost/studiekeuze"/>

            <BlogPost title="ICT lezing Damen Naval" link="/blogpost/damennaval"/>
        </div>
    )
}

export default Blog

