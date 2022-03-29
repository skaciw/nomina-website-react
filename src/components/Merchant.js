import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Merchant = () => {
    const svgMerchantTween = useRef(null);
    const onMouseEnterHandler = () => {
        svgMerchantTween.current.play();
    };
    const onMouseLeaveHandler = () => {
        svgMerchantTween.current.reverse();
    };

    useEffect(()=>{
        svgMerchantTween.current = gsap.timeline().to("#Path_2908", {
            rotate: 45,
            x: -42,y:-117
        },0).to('#MERCHANTMARVELS',{rotate:-5,y:20},0)
        .to('#leaf',{scaleY:1.1},0)
        .fromTo('#wagon',{x:17163.455},{x:17185},0)
        .fromTo('#foreground',{x:16631.281},{x:16601},0).fromTo('#sword',{x:16981.281},{x:16950},0);
    });

    return(
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <svg id="Component_25_1" data-name="Component 25 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1306.453 737.388">
                <defs>
                    <clipPath id="clip-path">
                    <path id="Path_2956" data-name="Path 2956" d="M0,0H1215.756V281.546L1084.542,391H0Z" transform="translate(16666 -303.034)" fill="#fff"/>
                    </clipPath>
                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1161 903">
                    <image width="1161" height="903" xlinkHref="images/svg/Component%2025%20-%201-image6.png"/>
                    </pattern>
                </defs>
                <g id="Group_1854" data-name="Group 1854" transform="translate(-16663 1379.521)">
                    <g id="Mask_Group_5" data-name="Mask Group 5" transform="translate(0 -754.414)" clip-path="url(#clip-path)">
                    <image id="TEXTURE" width="1559.654" height="995.551" transform="translate(16457.389 -784.989)" xlinkHref="images/svg/Component%2025%20-%201-image.png"/>
                    <image id="fore_ground" data-name="fore ground" width="403.015" height="214.592" transform="matrix(0.998, 0.07, -0.07, 0.998, 17493.287, -111.393)" xlinkHref="images/svg/Component%2025%20-%201-image2.png"/>
                    <image id="forger" width="210.405" height="201.759" transform="translate(16721.152 -149.394)" xlinkHref="images/svg/Component%2025%20-%201-image3.png"/>
                    <image id="foreground" width="414.006" height="221.92" transform="matrix(0.998, -0.07, 0.07, 0.998, 16637.5, -95.073)" xlinkHref="images/svg/Component%2025%20-%201-image4.png"/>
                    <image id="sword" width="97.352" height="215.944" transform="translate(16981.281 -81.352)" xlinkHref="images/svg/Component%2025%20-%201-image5.png"/>
                    </g>
                    <rect id="wagon" width="805.997" height="627.443" transform="translate(17163.455 -1304.969)" fill="url(#pattern)"/>
                    <image id="leaf" width="947.347" height="276.353" transform="translate(16768.781 -1223.12)" xlinkHref="images/svg/Component%2025%20-%201-image7.png"/>
                    <image id="fox" width="545.902" height="532.023" transform="translate(16856.553 -1174.156)" xlinkHref="images/svg/Component%2025%20-%201-image8.png"/>
                </g>
                <path id="Path_2958" data-name="Path 2958" d="M0,409.452H1102.781l133.42-114.62V0" transform="translate(0 320.932)" fill="none" stroke="#0ae6a6" stroke-linejoin="round" stroke-width="4"/>
                <rect id="Rectangle_790" data-name="Rectangle 790" width="150.855" height="3.613" rx="1.807" transform="translate(1125.143 732.101) rotate(-41)" fill="#0ae6a6"/>
                <image id="MERCHANTMARVELS" width="371" height="273.103" transform="translate(100.5)" xlinkHref="images/svg/Component%2025%20-%201-image9.png"/>
                <g id="Group_1857" data-name="Group 1857" transform="translate(1252 318.716)">
                    <path id="Path_2907" data-name="Path 2907" d="M97.263,131.255l-7.292-7.292L79.337,134.6,68.7,123.963l-7.292,7.292,10.634,10.634L61.412,152.523l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,141.889Z" transform="translate(-61.412 -123.963)" fill="#fdfdfd"/>
                    <path id="Path_2908" data-name="Path 2908" d="M97.263,186.511l-7.292-7.292L79.337,189.854,68.7,179.22l-7.292,7.292,10.634,10.634L61.412,207.779l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,197.145Z" transform="translate(-61.412 -112.775)" fill="#0ae6a6"/>
                    <path id="Path_2909" data-name="Path 2909" d="M97.263,241.768l-7.292-7.292L79.337,245.11,68.7,234.476l-7.292,7.292L72.045,252.4,61.412,263.035l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,252.4Z" transform="translate(-61.412 -101.588)" fill="#fdfdfd"/>
                </g>
                <image id="butterfly" width="537.005" height="173.598" transform="translate(512.242 406.577)" xlinkHref="images/svg/Component%2025%20-%201-image10.png"/>
            </svg>
        </div>
    );

}

export default Merchant