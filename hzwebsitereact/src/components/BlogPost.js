import React from "react";
import "../css/BlogPost.css";
import { useHistory, Link } from "react-router-dom";

function BlogPost({ title, link }) {
  const history = useHistory();

  return (
    <div className="blogpost">
      <h3 className="blogpost__title">{title}</h3>

      {title ===
      "HTML5 best practices; section/header/aside/article elements" ? (
        <Link target="_blank" to={link} className="blogpost__readmore">
          read more
        </Link>
      ) : (
        <Link to={link} className="blogpost__readmore">
          read more
        </Link>
      )}
    </div>
  );
}

export default BlogPost;
