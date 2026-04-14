// Import Modules
import React from "react";
import "../style/style.css";
import "./Blog.css";


const Blog = () => {
 return (
    <div className="blog_page">
        <div className="blog_topics">
            <div className="blog_topic">CSS</div>
            <div className="blog_topic">Grid</div>
            <div className="blog_topic">layout</div>
            <div className="blog_topic">frontend</div>
            <div className="blog_topic">web design</div>
        </div>
        <div className="blog_newest">
            <div className="newest">
                <div className="postAuth">LH</div>
                <div className="post_info">
                    <div className="authName">Luis Huesca</div>
                    <div className="post_resume">
                        Front-end developer & UI enthusiast. Writing about CSS, JS, and building better web experiences.
                    </div>
                </div>
            </div>
        </div>
        <div className="related_post">
            <div className="relate_title">Related articles</div>
            <div className="related_articles">
                {/* ========= */}
                <div className="relate_article">
                    <div className="art_titl">//css</div>
                    <div className="art_info">Flexbox vs Grid: when to use which</div>
                    <div className="art_date">Mar 28, 2025</div>
                </div>
                {/* ========= */}
                {/* ========= */}
                <div className="relate_article">
                    <div className="art_titl">//JavaScript</div>
                    <div className="art_info">Async/await patterns you should know</div>
                    <div className="art_date">Mar 14, 2025</div>
                </div>
                {/* ========= */}
                {/* ========= */}
                <div className="relate_article">
                    <div className="art_titl">//React</div>
                    <div className="art_info">Component design for scalable UIs</div>
                    <div className="art_date">Feb 20, 2025</div>
                </div>
                {/* ========= */}
            </div>
        </div>
    </div>
 );
};

export default Blog;