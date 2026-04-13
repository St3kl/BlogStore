// Import Modules
import React from "react";
import "../style/style.css";
import "./HomeBlog.css";

const HomeBlog = ()=>{

    return(

        <div className="home_blog">
            <div className="blog_title title">BLOG</div>
            <div className="blog_info">
                <h2 className="blog_phrase">Latest Articles</h2>
                <h5>I write about web development, tools, and building things on the internet.</h5>
            </div>
            {/* The las blog news in our blog */}
            <div className="article_content">
                <div className="blog_article">
                    <div className="topic">// Web development</div>
                    <div className="topic_article">
                        <h2>Why every developer should master CSS Grid in 2025</h2>
                        <div className="article_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quod voluptatum rerum nihil, dolore eligendi amet nobis delectus quas adipisci natus odit necessitatibus impedit, eius labore reprehenderit dolorem neque animi?</div>
                    </div>
                    <div className="author_info">
                        <div className="photo">JD</div>
                        <div className="auth_name">John Dev  ·  Apr 11, 2025  |  
6 min read</div>
                    </div>
                </div>
                <p className="errorSms">Failed to load content.</p>
            </div>
            <div className="blog_btn">
                <button className="btn_blog btn">All Articles →</button>
            </div>
        </div>
    );

};


export default HomeBlog;