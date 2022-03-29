
import React from "react";
import "../css/Footer.css"
const Footer=()=>{
    return (
        <div className="container-fluid footer-wrap">
            <div className="row">
                <div className="col-md-3">
                    <div className="adjust-pos-footer">
                        <img src="images/logo-larger.png" alt="nomina"/>
                    </div>

                </div>
                <div className="col-md-3">
                    <div className="adjust-pos-footer">
                        <span>©2021 Nomina. All Rights Reserved</span>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="adjust-center-footer">
                        <div className="wrap-social-media-footer">
                            {/* <button class="btn-rounded-footer"><i class="fa-brands fa-facebook-f"></i></button> */}
                            <a href="https://twitter.com/nominagames" target="_blank" rel="noreferrer" class="btn-rounded-footer"><i class="fa-brands fa-twitter fa-lg"></i></a>
                            <a href="https://www.instagram.com/nominagames/?hl=en" target="_blank" rel="noreferrer" class="btn-rounded-footer"><i class="fa-brands fa-instagram fa-lg"></i></a>
                            {/* <button class="btn-rounded-footer"><i class="fa-brands fa-discord"></i></button> */}
                            {/* <button class="btn-rounded-footer"><i class="fa-solid fa-paper-plane"></i></button> */}
                            {/* <button class="btn-rounded-footer"><i class="fa-brands fa-youtube"></i></button> */}
                            {/* <button class="btn-rounded-footer"><i class="fa-brands fa-linkedin-in"></i></button> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

}

export default Footer