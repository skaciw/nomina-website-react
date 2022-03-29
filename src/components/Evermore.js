import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Evermore = () => {
    
    const svgEvermoreTween = useRef(null);
    const onMouseEnterHandler = () => {
        svgEvermoreTween.current.play();
    };
    const onMouseLeaveHandler = () => {
        svgEvermoreTween.current.reverse();
    };

    useEffect(()=>{
        svgEvermoreTween.current = gsap.timeline().to("#Path_2908", {
            rotate: 45,
            x: -42,y:-117
        },0).fromTo('#CHARACTERS_POSTER',{scale:0.9},{scale:1},0).to('#middle_object',{x:35},0);
    });
    // width="1298.852" height="725.669"
    return (
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
            {/* <object data="images/evermore-game.png"/> */}
            <svg  id="Component_31_1" data-name="Component 31 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1308.852 725.669">
                <defs>
                    <clipPath id="clip-path">
                    <path id="Path_2959" data-name="Path 2959" d="M0,0H1215.756V281.546L1084.542,391H0Z" transform="translate(0 560.914)" fill="#fff"/>
                    </clipPath>
                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1226 861">
                    <image width="1226" height="861" xlinkHref="images/svg/Component%2031%20-%201-image2.png"/>
                    </pattern>
                    <pattern id="pattern-2" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 2067 599">
                    <image width="2067" height="599" xlinkHref="images/svg/Component%2031%20-%201-image3.png"/>
                    </pattern>
                    <pattern id="pattern-3" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 3200 623">
                    <image width="3200" height="623" xlinkHref="images/svg/Component%2031%20-%201-image5.png"/>
                    </pattern>
                    <pattern id="pattern-4" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 3200 747">
                    <image width="3200" height="747" xlinkHref="images/svg/Component%2031%20-%201-image6.png"/>
                    </pattern>
                    <pattern id="pattern-5" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 3200 561">
                    <image width="3200" height="561" xlinkHref="images/svg/Component%2031%20-%201-image7.png"/>
                    </pattern>
                    <pattern id="pattern-6" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 3411 1232">
                    <image width="3411" height="1232" xlinkHref="images/svg/Component%2031%20-%201-image9.png"/>
                    </pattern>
                </defs>
                <rect id="Rectangle_790" data-name="Rectangle 790" width="150.855" height="3.613" rx="1.807" transform="translate(1136.143 722.942) rotate(-41)" fill="#0ae6a6"/>
                <path id="Path_2958" data-name="Path 2958" d="M0,409.452H1102.781l133.42-114.62V0" transform="translate(11 311.773)" fill="none" stroke="#0ae6a6" stroke-linejoin="round" stroke-width="4"/>
                <g id="Mask_Group_8" data-name="Mask Group 8" transform="translate(14 -248)" clip-path="url(#clip-path)">
                    <g id="Rome_Kingdom" data-name="Rome Kingdom" transform="translate(0.104 402.61)">
                    <g id="middle_object" data-name="middle object" transform="translate(22.448 167.787)">
                        <image id="Layer_20" data-name="Layer 20" width="587" height="277" transform="translate(466.448 -0.398)" xlinkHref="images/svg/Component%2031%20-%201-image.png"/>
                        <rect id="Layer_19" data-name="Layer 19" width="466" height="327" transform="translate(0.448 38.602)" fill="url(#pattern)"/>
                        <rect id="Layer_14" data-name="Layer 14" width="786" height="228" transform="translate(937.448 48.602)" fill="url(#pattern-2)"/>
                    </g>
                    <rect id="foreground_3" data-name="foreground 3" width="1218" height="237" transform="translate(-0.105 312.39)" fill="url(#pattern-3)"/>
                    <rect id="foreground_2" data-name="foreground 2" width="1218" height="284" transform="translate(-0.105 263.39)" fill="url(#pattern-4)"/>
                    <rect id="foreground_1" data-name="foreground 1" width="1218" height="213" transform="translate(-0.105 334.39)" fill="url(#pattern-5)"/>
                    </g>
                </g>
                <g id="Group_1860" data-name="Group 1860" transform="translate(1263 309.557)">
                    <path id="Path_2907" data-name="Path 2907" d="M97.263,131.255l-7.292-7.292L79.337,134.6,68.7,123.963l-7.292,7.292,10.634,10.634L61.412,152.523l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,141.889Z" transform="translate(-61.412 -123.963)" fill="#fdfdfd"/>
                    <path id="Path_2908" data-name="Path 2908" d="M97.263,186.511l-7.292-7.292L79.337,189.854,68.7,179.22l-7.292,7.292,10.634,10.634L61.412,207.779l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,197.145Z" transform="translate(-61.412 -112.775)" fill="#0ae6a6"/>
                    <path id="Path_2909" data-name="Path 2909" d="M97.263,241.768l-7.292-7.292L79.337,245.11,68.7,234.476l-7.292,7.292L72.045,252.4,61.412,263.035l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,252.4Z" transform="translate(-61.412 -101.588)" fill="#fdfdfd"/>
                </g>
                <image id="CHARACTERS_POSTER" data-name="CHARACTERS POSTER" width="677" height="712" xlinkHref="images/svg/Component%2031%20-%201-image8.png"/>
                <rect id="EVERMORE_KNIGHTS_LOGO" data-name="EVERMORE KNIGHTS LOGO" width="475" height="172" transform="translate(677 103)" fill="url(#pattern-6)"/>
            </svg>
        </div>
    );
}

export default Evermore 