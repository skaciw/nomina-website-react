import "../css/AboutUs.css"
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () =>{
    return (
        <section id="about">
            <motion.div initial={{opacity: 0.6}} animate={{opacity: 1}} transition={{duration: 1, ease:"easeOut"}}>
                
                <img className="desk-size" src="images/nomina.png" alt=""/>
               

                <div className="container">
                    <div className="about-us-title-wrap">
                        <h2>ABOUT US</h2>
                        <p>Games for the love of games. We stand by this core philosophy in believing that games aren’t just a source of fun, but a memorable service for many to enjoy. 
                            We are a dedicated team of developers eager in delivering quality products for everyone to see.</p>
                        <p>We are a collection of industry experts who have worked tirelessly on their own personal projects, 
                            as well as having decades of combined experience in the field.</p>
                        <p>We are here for the long run, and we are here for you.</p>
                    </div>

                    
                    <div className="about-us-title-wrap adjust-pos">
                        <h2>LIFE AT NOMINA GAMES</h2>
                        <img className="nomina-desktop" src="images/life-at-nomina.png" alt=""/>
                        <img className="nomina-mob" src="images/life-at-nomina-mob.png" alt=""/>

                        {/* <div className="grid-pic-life-at-nomina">
                            <div className="item1">
                                <img src="images/grid-1.png"/>
                            </div>
                            <div className="item2">
                                <img src="images/grid-2.png"/>
                            </div>
                            <div className="item3">
                                <img src="images/grid-3.png"/>
                            </div>
                            <div className="item4">
                                <img src="images/grid-4.png"/>
                            </div>
                            <div className="item5">
                                <img src="images/grid-5.png"/>
                            </div>
                        </div> */}
                    </div>
                </div>    
                <div className="logo-nomina-white-wrap">
                    <img src="images/logo-nomina-white.png" alt=""/>
                </div>

            </motion.div>
            
        </section>
    );
}

export default AboutUs