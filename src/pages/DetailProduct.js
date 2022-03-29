import React from "react";
import "../css/DetailProduct.css"

const DetailProduct = () =>{

    return (
        <section>
            <div className="container" style={{paddingTop: "6rem",paddingBottom: "4rem"}}>

                <img src="images/revenant/main-pic.png" alt=""/>
                <div style={{paddingTop:"2rem",paddingLeft:"0.2rem"}}>
                    <h2>The Revenant Prince</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                A tale of the man who wishes for his soul to be free. Kill or show mercy, 
                                the choice is yours. Your actions lead to certain consequences and outcomes 
                                that cannot be undone!
                            </p>
                        </div>

                        <div className="col-md-6">
                            <div style={{float: "right"}}>
                                <button className="btn-products"><i class="fa-brands fa-discord"></i></button>
                                <button className="btn-products">Go To Website</button>
                                <button className="btn-products"><span>Buy on Steam </span><i class="fa-brands fa-steam-square"></i></button>
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="wrap-more-img-detail-product">
                    <div>
                        <img src="images/revenant/1.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/2.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/3.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/4.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/5.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/6.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/7.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/8.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/9.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/10.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/11.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/revenant/12.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default DetailProduct