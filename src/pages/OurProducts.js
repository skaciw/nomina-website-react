import "../css/OurProducts.css"
import React,{useEffect, useState} from "react";
import Evermore from "../components/Evermore";
import Slime from "../components/Slime";
import Peony from "../components/Peony";
import Merchant from "../components/Merchant";


const OurProducts = () => {
    
    const [index, setIndex] = useState(0);

    const listImg = [<Evermore/>,<Peony/>, <Slime/>,<Merchant/> ];
    const game = [
        {
            name: "Evermore Knights",
            definition: "A quality 2D illustrated blockchain RPG based in Indonesia with its own NFT marketplaces.",
            img_url: "images/evermore-game.png"
        },
        {
            name: "Peony Ranch",
            definition: "A farming simulator utilizing the  minted land under our ecosystem.  Use your bought land to set up  crops, as well as hire Peony Bud-  dies to help you manage your  ranch. Turn in your crops and re-  sources for daily income.",
            img_url: "images/peony-game.png"
        },
        {
            name: "Slime Haven",
            definition: "A pet / animal raising simulator. You can raise and breed slimes  and sell them on the marketplace. You can use these slimes on Evermore Knights as well to aid you in  battle.",
            img_url: "images/slime-game.png"
        },
        {
            name: "Merchant Marvels",
            definition: "Create weapons and sell them to players. Gather ores and minerals and use them to forge exclusive equipment or weapons to use on the gaming ecosystem.",
            img_url: "images/merchant-game.png"
        }
    ]

    const handleClick = (x) =>{
        setIndex(x.target.id);
        const btn = document.querySelectorAll('.btn-game');
        for (let i = 0 ; i < btn.length; i++){
            btn[i].classList.remove('selected');
        }   
        x.currentTarget.classList.add('selected');
    }
    return (
        <div>
            <section id="products">
                <div className="bg-products ">
                    <div className="row" >
                        <div className="col-md-8 col-lg-8 order-2 order-md-1">
                            
                            <div className="column-wrap">
                                <div>
                                    <button className="btn-game selected" onClick={handleClick}><img id="0" src="images/evermore-btn.png" alt=""/></button>
                                    <button className="btn-game" onClick={handleClick}><img id="1"  src="images/peony-btn.png" alt=""/></button>
                                    <button className="btn-game" onClick={handleClick}><img id="2" src="images/slime-btn.png" alt=""/></button>
                                    <button className="btn-game" onClick={handleClick}><img id="3" src="images/marvel-btn.png" alt=""/></button>
                                </div>
                                <div className="svg-wrapper">
                                    {listImg.at(index)}
                                </div>
                                {/* <img src={game.at(index).img_url} alt=""/> */}
                                
                            </div>

                        </div>

                        <div className="col-md-4 col-lg-4 order-1 order-md-2">
                            <div className="adjust-space">
                                <div className="wrap-game-title-desc">
                                    <h1>{game.at(index).name}</h1>
                                    <div className="draw-line"></div>
                                    <span>{game.at(index).definition}</span>
                                </div>
                                
                                <div className="adjust-center-products">
                                    <a href="www.example.com" target="_blank"><i class="fa-solid fa-globe fa-xl"></i></a>
                                    <a href="www.example.com" target="_blank"><i class="fa-solid fa-paper-plane fa-xl"></i></a>
                                    <a href="www.example.com" target="_blank"><i class="fa-brands fa-discord fa-xl"></i></a>
                                    <a href="www.example.com" target="_blank"><i class="fa-brands fa-twitter fa-xl"></i></a>
                                    <a href="www.example.com" target="_blank"><i class="fa-brands fa-instagram fa-xl"></i></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );

}

export default OurProducts