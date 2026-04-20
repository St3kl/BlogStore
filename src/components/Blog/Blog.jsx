// Import Modules
import React from "react";
import "../style/style.css";
import "./Blog.css";


const Blog = () => {
    const blogTopics =[{
        topicCss: "CSS",
        topicGrid: "Grid",
        topicLayout: "Layout",
        topicFrontend: "Frontend",
        topicWebDesign: "Web design",
    }];
    const postAuthor = [
        {
            author: "LH",
            name: "Luis Huesca",
            bio: "Front-end developer & UI enthusiast. Writing about CSS, JS, and building better web experiences."
        }
    ];
    const relatedArticles = [
        {
            artTitle: "//css",
            artInfo: "Flexbox vs Grid: when to use which",
            artDate: "Mar 28, 2025"
        },
        {
            artTitle: "//JavaScript",
            artInfo: "Async/await patterns you should know",
            artDate: "Mar 14, 2025"
        },
        {
            artTitle: "//React",
            artInfo: "Component design for scalable UIs",
            artDate: "Feb 20, 2025"
        },
        {
            artTitle: "//Node.js",
            artInfo: "Backend best practices for modern web apps",
            artDate: "May 20, 2025"
        },
    ];
 return (
    <div className="blog_page">
        <div className="blog_topics">
            <div className="blog_topic">{blogTopics[0].topicCss}</div>
            <div className="blog_topic">{blogTopics[0].topicGrid}</div>
            <div className="blog_topic">{blogTopics[0].topicLayout}</div>
            <div className="blog_topic">{blogTopics[0].topicFrontend}</div>
            <div className="blog_topic">{blogTopics[0].topicWebDesign}</div>
        </div>
        <div className="blog_newest">
            <div className="newest">
                <div className="postAuth">{postAuthor[0].author}</div>
                <div className="post_info">
                    <div className="authName">{postAuthor[0].name}</div>
                    <div className="post_resume">
                        {postAuthor[0].bio}
                    </div>
                </div>
            </div>
        </div>
        <div className="related_post">
            <div className="relate_title">Related articles</div>
            <div className="related_articles">
                {/* ========= */}
                {relatedArticles.map((article, index) => (
                    <div className="relate_article" key={index}>
                        <div className="art_titl">{article.artTitle}</div>
                        <div className="art_info">{article.artInfo}</div>
                        <div className="art_date">{article.artDate}</div>
                    </div>
                ))};
                {/* <div className="relate_article">
                    <div className="art_titl">{relatedArticles[0].artTitle}</div>
                    <div className="art_info">{relatedArticles[0].artInfo}</div>
                    <div className="art_date">{relatedArticles[0].artDate}</div>
                </div> */}
                {/* ========= */}
                {/* ========= */}
                {/* <div className="relate_article">
                    <div className="art_titl">{relatedArticles[1].artTitle}</div>
                    <div className="art_info">{relatedArticles[1].artInfo}</div>
                    <div className="art_date">{relatedArticles[1].artDate}</div>
                </div> */}
                {/* ========= */}
                {/* ========= */}
                {/* <div className="relate_article">
                    <div className="art_titl">{relatedArticles[2].artTitle}</div>
                    <div className="art_info">{relatedArticles[2].artInfo}</div>
                    <div className="art_date">{relatedArticles[2].artDate}</div>
                </div> */}
                {/* ========= */}
            </div>
        </div>
    </div>
 );
};

export default Blog;