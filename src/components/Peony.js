import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Peony = () => {
    const svgPeonyTween = useRef(null);
    const onMouseEnterHandler = () => {
        svgPeonyTween.current.play();
    };
    const onMouseLeaveHandler = () => {
        svgPeonyTween.current.reverse();
    };

    useEffect(()=>{
        svgPeonyTween.current = gsap.timeline().to("#Path_2908", {
            rotate: 45,
            x: -42,y:-117
        },0).to('#Layer_2',{rotate:15,y:10},0).to('#LOGO',{rotate:-3},0).fromTo('#horse',{scale:0.95},{scale:1.0},0)
        .to('#Layer_1',{rotate:-2,y:105},0).fromTo('#bird',{x:1206,y: 152.137},{x:1176,y: 132.137},0)
        .fromTo('#bird_copy',{x:410,y: 192.137},{x:430,y:180},0);
    }); 
    return(
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
            <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1321 714">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Rectangle_1185" data-name="Rectangle 1185" width="1321" height="714" transform="translate(-7357 1164)" fill="#fff" stroke="#707070" stroke-width="1"/>
                    </clipPath>
                    <clipPath id="clip-path-2">
                    <path id="Path_2959" data-name="Path 2959" d="M0,0H1215.756V281.546L1084.542,391H0Z" transform="translate(0 560.914)" fill="#fff"/>
                    </clipPath>
                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 4849 1962">
                    <image width="4849" height="1962" xlinkHref="images/svg/Mask%20Group%2035-image2.png"/>
                    </pattern>
                    <pattern id="pattern-2" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 761 201">
                    <image width="761" height="201" xlinkHref="images/svg/Mask%20Group%2035-image5.png"/>
                    </pattern>
                    <pattern id="pattern-3" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 363 265">
                    <image width="363" height="265" xlinkHref="images/svg/Mask%20Group%2035-image10.png"/>
                    </pattern>
                    <pattern id="pattern-4" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 443 356">
                    <image width="443" height="356" xlinkHref="images/svg/Mask%20Group%2035-image11.png"/>
                    </pattern>
                </defs>
                <g id="Mask_Group_35" data-name="Mask Group 35" transform="translate(7357 -1164)" clip-path="url(#clip-path)">
                    <g id="Component_26_1" data-name="Component 26 – 1" transform="translate(-7494 1173.194)">
                    <path id="Path_2958" data-name="Path 2958" d="M0,409.452H1102.781l133.42-114.62V0" transform="translate(138 290.91)" fill="none" stroke="#0ae6a6" stroke-linejoin="round" stroke-width="4"/>
                    <rect id="Rectangle_790" data-name="Rectangle 790" width="150.855" height="3.613" rx="1.807" transform="translate(1263.143 702.079) rotate(-41)" fill="#0ae6a6"/>
                    <g id="Mask_Group_7" data-name="Mask Group 7" transform="translate(141 -268.863)" clip-path="url(#clip-path-2)">
                        <image id="land" width="1244" height="476" transform="translate(-2 476)" xlinkHref="images/svg/Mask%20Group%2035-image.png"/>
                    </g>
                    <rect id="mountain" width="784" height="317" transform="translate(481 326.137)" fill="url(#pattern)"/>
                    <image id="house" width="156" height="134" transform="translate(1058 373.137)" xlinkHref="images/svg/Mask%20Group%2035-image3.png"/>
                    <image id="water_tank" data-name="water tank" width="100" height="214" transform="translate(1184 317.137)" xlinkHref="images/svg/Mask%20Group%2035-image4.png"/>
                    <rect id="fence" width="123" height="32" transform="translate(983 470.137)" fill="url(#pattern-2)"/>
                    <image id="barn" width="339" height="192" transform="translate(204 273.137)" xlinkHref="images/svg/Mask%20Group%2035-image6.png"/>
                    <image id="Layer_1" data-name="Layer 1" width="382" height="472" transform="translate(0 90.137)" xlinkHref="images/svg/Mask%20Group%2035-image7.png"/>
                    <image id="horse" width="1137" height="344" transform="translate(139 326.137)" xlinkHref="images/svg/Mask%20Group%2035-image8.png"/>
                    <image id="Layer_2" data-name="Layer 2" width="211" height="313" transform="translate(973 46.137)" xlinkHref="images/svg/Mask%20Group%2035-image9.png"/>
                    <rect id="bird" width="59" height="43" transform="translate(1206 152.137)" fill="url(#pattern-3)"/>
                    <rect id="bird_copy" data-name="bird copy" width="71" height="57" transform="translate(410 192.137)" fill="url(#pattern-4)"/>
                    <image id="LOGO" width="356.297" height="304.274" transform="translate(529.352)" xlinkHref="images/svg/Mask%20Group%2035-image12.png"/>
                    <g id="Group_1860" data-name="Group 1860" transform="translate(1390 288.694)">
                        <path id="Path_2907" data-name="Path 2907" d="M97.263,131.255l-7.292-7.292L79.337,134.6,68.7,123.963l-7.292,7.292,10.634,10.634L61.412,152.523l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,141.889Z" transform="translate(-61.412 -123.963)" fill="#fdfdfd"/>
                        <path id="Path_2908" data-name="Path 2908" d="M97.263,186.511l-7.292-7.292L79.337,189.854,68.7,179.22l-7.292,7.292,10.634,10.634L61.412,207.779l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,197.145Z" transform="translate(-61.412 -112.775)" fill="#0ae6a6"/>
                        <path id="Path_2909" data-name="Path 2909" d="M97.263,241.768l-7.292-7.292L79.337,245.11,68.7,234.476l-7.292,7.292L72.045,252.4,61.412,263.035l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,252.4Z" transform="translate(-61.412 -101.588)" fill="#fdfdfd"/>
                    </g>
                    </g>
                </g>
            </svg>

        </div>
    );
}

export default Peony