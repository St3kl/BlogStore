// Import Modules
import React from "react";
import "../style/style.css";

const HomeTemplate = (props)=>{

    return (
        <div className="ready_template">
            <div className="template_title title">STORE</div>
            <div className="template_info">
                <h2>Ready-made Templates</h2>
                <h5>Skip the setup. Download professional templates and launch your project today.</h5>

            </div>
            {/* The most recent template in our shop */}
             <div className="article_content">
                <div className="template">
                    <div className="img_template">

                    </div>
                    <div className="template_info">
                        <div className="small_title">//Portafolio</div>
                        <h4 className="temp_title">Dev portfolio — minimal dark</h4>
                        <div className="info_temp">A sleek, dark-themed portfolio for developers. Sections for hero, projects, skills, and contact. Zero dependencies.</div>
                        <div className="tools">
                            <div className="temp_skills">
                                <div className="skill">{props.skillH}</div>
                                <div className="skill">{props.skillC}</div>
                                <div className="skill">{props.skillJ}</div>
                            </div>
                            <div className="button_btn">
                                <button className="btn"> use template →</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="errorSms">Failed to load content.</p>
            </div>
             <div className="blog_btn">
                <button className="btn_blog btn">Browse the Store →</button>
            </div>
        </div>
    );


};

export default HomeTemplate;