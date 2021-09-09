import React from 'react';
import "../css/BlogPost.css"
import {useHistory} from "react-router-dom";

function BlogPost({title,link}) {
    const history=useHistory()


    
    return (
        <div className="blogpost">
            <h3 className="blogpost__title">{title}</h3>


            <a target="_blank" href={link} className="blogpost__readmore">read more</a>
            
        </div>
    )
}

export default BlogPost
