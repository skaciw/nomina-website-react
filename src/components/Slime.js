import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Slime = () => {    
    const svgTween = useRef(null);
    
    const onMouseEnterHandler = () => {
        svgTween.current.play();
    };
    const onMouseLeaveHandler = () => {
        svgTween.current.reverse();
    };

    useEffect(() => {
        svgTween.current = gsap.timeline().to("#Path_2908", {
            rotate: 45,
            x: -42,y:-117
        },0).to('#LEFT_WING-2',{rotate:-30,y:32},0).to('#RIGHT_WING-2',{rotate:30,y:32,x:185},0).to('#HOT_AIR_BALLOON',{
            rotate: -10,
            y:25
        },0)
        .to('#CRYSTAL_BLUE_SLIME',{
            scale: 1.027, x:0.165
        },0).to('#GREEN_SHELL_SLIME',{
            scale: 1.1,
        },0).to('#COPPER_SLIME',{scale:1.1},
        0).to('#YELLOW_SLIME',{
            scale: 1.1
        },0).to('#LIGHT_GREEN_SLIME',{scale:1.1},0)
        .fromTo("#Group_1862",{
            scaleY: 0.9,
        },{scaleY:1},0)
        .fromTo('#Group_1738',{
            scale: 0.99,},{scale: 1.005
        },0).to('#ANGEL_SLIME',{y:160,x:180},0).to('#DEVIL_SLIME',{y:90,x:90},0).to('#LEFT_WING',{rotate:30,y:32,x:80},0).to('#RIGHT_WING',{rotate:-30,y:15,x:-15},0);
    });
    return(
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
            <svg  id="Component_30_1" data-name="Component 30 – 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1321 714">
                <defs>
                    <clipPath id="clip-path">
                    <path id="Path_2959" data-name="Path 2959" d="M0,0H1215.756V281.546L1084.542,391H0Z" transform="translate(0 560.914)" fill="#fff"/>
                    </clipPath>
                    <clipPath id="clip-path-2">
                    <path id="Path_2839" data-name="Path 2839" d="M20185.32-1932.457h1259.3v-269.406l-616.461-36.624-228.977-24.876-128.051-143-66.23,45.893-150.559-37.505-11.32,26.988s3.266-43.366-63.223-42.276C20179.8-2328.368,20185.32-1932.457,20185.32-1932.457Z" transform="translate(-20179.797 2413.279)" fill="#fff" stroke="#707070" stroke-width="1"/>
                    </clipPath>
                    <pattern id="pattern" width="1" height="1" patternTransform="matrix(-1, 0, 0, 1, 55.883, 0)" viewBox="0 0 27.941 22.353">
                    <image preserveAspectRatio="none" width="27.941" height="22.353" xlinkHref="images/svg/Component%2030%20-%201-image4.png"/>
                    </pattern>
                    <pattern id="pattern-2" width="1" height="1" patternTransform="matrix(-1, 0, 0, 1, 60.181, 0)" viewBox="0 0 30.091 30.718">
                    <image preserveAspectRatio="none" width="30.091" height="30.718" xlinkHref="images/svg/Component%2030%20-%201-image5.png"/>
                    </pattern>
                    <pattern id="pattern-3" width="1" height="1" patternTransform="matrix(-1, 0, 0, 1, 136.776, 0)" viewBox="0 0 68.388 75.227">
                    <image preserveAspectRatio="none" width="68.388" height="75.227" xlinkHref="images/svg/Component%2030%20-%201-image6.png"/>
                    </pattern>
                    <pattern id="pattern-4" width="1" height="1" patternTransform="translate(207.207 186.914) rotate(-180)" viewBox="0 0 103.604 93.457">
                    <image preserveAspectRatio="none" width="103.604" height="93.457" xlinkHref="images/svg/Component%2030%20-%201-image18.png"/>
                    </pattern>
                    <pattern id="pattern-5" width="1" height="1" patternTransform="translate(103.023 98.775) rotate(-180)" viewBox="0 0 51.512 49.388">
                    <image preserveAspectRatio="none" width="51.512" height="49.388" xlinkHref="images/svg/Component%2030%20-%201-image19.png"/>
                    </pattern>
                    <pattern id="pattern-6" width="1" height="1" patternTransform="translate(141.289 196.53) rotate(-180)" viewBox="0 0 70.645 98.265">
                    <image preserveAspectRatio="none" width="70.645" height="98.265" xlinkHref="images/svg/Component%2030%20-%201-image20.png"/>
                    </pattern>
                </defs>
                <path id="Path_2958" data-name="Path 2958" d="M0,409.452H1102.781l133.42-114.62V0" transform="translate(0 270.902)" fill="none" stroke="#0ae6a6" stroke-linejoin="round" stroke-width="4"/>
                <g id="Mask_Group_8" data-name="Mask Group 8" transform="translate(3 -288.872)" clip-path="url(#clip-path)">
                    <g id="Mask_Group_4" data-name="Mask Group 4" transform="translate(0 471.092)" clip-path="url(#clip-path-2)">
                    <image id="BG" width="1703.907" height="1052.102" transform="translate(-176.899 -388.03)" xlinkHref="images/svg/Component%2030%20-%201-image.png"/>
                    </g>
                </g>
                <g id="Group_1860" data-name="Group 1860" transform="translate(1252 268.686)">
                    <path id="Path_2907" data-name="Path 2907" d="M97.263,131.255l-7.292-7.292L79.337,134.6,68.7,123.963l-7.292,7.292,10.634,10.634L61.412,152.523l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,141.889Z" transform="translate(-61.412 -123.963)" fill="#fdfdfd"/>
                    <path id="Path_2908" data-name="Path 2908" d="M97.263,186.511l-7.292-7.292L79.337,189.854,68.7,179.22l-7.292,7.292,10.634,10.634L61.412,207.779l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,197.145Z" transform="translate(-61.412 -112.775)" fill="#0ae6a6"/>
                    <path id="Path_2909" data-name="Path 2909" d="M97.263,241.768l-7.292-7.292L79.337,245.11,68.7,234.476l-7.292,7.292L72.045,252.4,61.412,263.035l7.292,7.292,10.634-10.634,10.634,10.634,7.292-7.292L86.629,252.4Z" transform="translate(-61.412 -101.588)" fill="#fdfdfd"/>
                </g>
                <g id="GREEN_SHELL_SLIME" data-name="GREEN SHELL SLIME" transform="translate(844.889 481.423)">
                    <g id="GREEN_SHELL_SLIME-2" data-name="GREEN SHELL SLIME" transform="translate(0 0)">
                    <image id="GREEN_SLIME" data-name="GREEN SLIME" width="188.067" height="144.617" transform="translate(0 31.165)" xlinkHref="images/svg/Component%2030%20-%201-image2.png"/>
                    <image id="Layer_162_copy" data-name="Layer 162 copy" width="107.467" height="90.533" transform="translate(61.256)" xlinkHref="images/svg/Component%2030%20-%201-image3.png"/>
                    </g>
                </g>
                <g id="DEVIL_SLIME" data-name="DEVIL SLIME" transform="translate(74.941 94.144) rotate(-13)">
                    <g id="DEVIL_SLIME-2" data-name="DEVIL SLIME" transform="translate(0 0)">
                    <rect id="LEFT_WING" data-name="LEFT WING" width="27.941" height="22.353" transform="translate(67.704 22.568)" fill="url(#pattern)"/>
                    <rect id="RIGHT_WING" data-name="RIGHT WING" width="30.091" height="30.718" transform="translate(0 0)" fill="url(#pattern-2)"/>
                    <rect id="Layer_219" data-name="Layer 219" width="68.388" height="75.227" transform="translate(10.063 0)" fill="url(#pattern-3)"/>
                    </g>
                </g>
                <g id="ANGEL_SLIME" data-name="ANGEL SLIME" transform="translate(171.068 173.095)">
                    <g id="ANGEL_SLIME-2" data-name="ANGEL SLIME" transform="translate(0 0)">
                    <image id="RIGHT_WING-2" data-name="RIGHT WING" width="46.294" height="44.558" transform="translate(167.57 33.741)" xlinkHref="images/svg/Component%2030%20-%201-image7.png"/>
                    <image id="SLIME" width="134.317" height="141.234" transform="translate(48.25 14.833)" xlinkHref="images/svg/Component%2030%20-%201-image8.png"/>
                    <image id="HALO" width="72.819" height="24.997" transform="matrix(0.996, 0.087, -0.087, 0.996, 94.188, 0)" xlinkHref="images/svg/Component%2030%20-%201-image9.png"/>
                    <image id="LEFT_WING-2" data-name="LEFT WING" width="71.722" height="57.492" transform="translate(0 9.617)" xlinkHref="images/svg/Component%2030%20-%201-image10.png"/>
                    </g>
                </g>
                <g id="YELLOW_SLIME" data-name="YELLOW SLIME" transform="translate(543.971 397.558)">
                    <g id="YELLOW_SLIME-2" data-name="YELLOW SLIME" transform="translate(0 0)">
                    <image id="Layer_109" data-name="Layer 109" width="146.727" height="108.18" transform="translate(0 32.991)" xlinkHref="images/svg/Component%2030%20-%201-image11.png"/>
                    <image id="FACE" width="62.146" height="43.122" transform="translate(23.017 53.706)" xlinkHref="images/svg/Component%2030%20-%201-image12.png"/>
                    <image id="EYEBROW" width="45.267" height="10.864" transform="translate(32.991 56.775)" xlinkHref="images/svg/Component%2030%20-%201-image13.png"/>
                    <image id="HORN" width="78.258" height="57.762" transform="translate(22.25 0)" xlinkHref="images/svg/Component%2030%20-%201-image14.png"/>
                    <image id="BAG" width="54.865" height="76.306" transform="matrix(0.998, -0.07, 0.07, 0.998, 91.87, 37.155)" xlinkHref="images/svg/Component%2030%20-%201-image15.png"/>
                    </g>
                </g>
                <g id="CRYSTAL_BLUE_SLIME" data-name="CRYSTAL BLUE SLIME" transform="translate(96.92 386.852)">
                    <g id="CRYSTAL_BLUE_SLIME-2" data-name="CRYSTAL BLUE SLIME" transform="translate(0 0)">
                    <image id="Layer_210" data-name="Layer 210" width="205.262" height="152.168" transform="translate(0 36.539)" xlinkHref="images/svg/Component%2030%20-%201-image16.png"/>
                    <image id="Layer_205" data-name="Layer 205" width="102.094" height="92.266" transform="translate(22.568)" xlinkHref="images/svg/Component%2030%20-%201-image17.png"/>
                    </g>
                </g>
                <g id="COPPER_SLIME" data-name="COPPER SLIME" transform="translate(1203.932 596.588) rotate(-180)">
                    <g id="COPPER_SLIME-2" data-name="COPPER SLIME" transform="translate(0 0)">
                    <rect id="Layer_114_copy" data-name="Layer 114 copy" width="103.604" height="93.457" transform="translate(12.666 0)" fill="url(#pattern-4)"/>
                    <rect id="Layer_114" data-name="Layer 114" width="51.512" height="49.388" transform="translate(60.342 72.769)" fill="url(#pattern-5)"/>
                    <rect id="Layer_70" data-name="Layer 70" width="70.645" height="98.265" transform="translate(0 26.835)" fill="url(#pattern-6)"/>
                    </g>
                </g>
                <g id="LIGHT_GREEN_SLIME" data-name="LIGHT GREEN SLIME" transform="translate(776.109 435.212)">
                    <g id="LIGHT_GREEN_SLIME-2" data-name="LIGHT GREEN SLIME" transform="translate(0 0)">
                    <image id="Layer_57" data-name="Layer 57" width="89.946" height="81.675" transform="translate(0 10.747)" xlinkHref="images/svg/Component%2030%20-%201-image21.png"/>
                    <image id="Layer_137" data-name="Layer 137" width="49.435" height="61.666" transform="translate(46.211 0)" xlinkHref="images/svg/Component%2030%20-%201-image22.png"/>
                    </g>
                </g>
                <image id="HOT_AIR_BALLOON" data-name="HOT AIR BALLOON" width="243.389" height="389.126" transform="translate(918.813) rotate(8)" xlinkHref="images/svg/Component%2030%20-%201-image23.png"/>
                <g id="Group_1738" data-name="Group 1738" transform="translate(6.645 452.406)">
                    <image id="STONE" width="624.951" height="95.646" transform="translate(0 114.99)" xlinkHref="images/svg/Component%2030%20-%201-image24.png"/>
                    <g id="RED_SLIME" data-name="RED SLIME" transform="translate(324.55 0)">
                    <image id="RED_SLIME-2" data-name="RED SLIME" width="133.259" height="134.751" transform="translate(0 17.195)" xlinkHref="images/svg/Component%2030%20-%201-image25.png"/>
                    <image id="HORN-2" data-name="HORN" width="82.75" height="49.055" transform="translate(36.54)" xlinkHref="images/svg/Component%2030%20-%201-image26.png"/>
                    <image id="Layer_135" data-name="Layer 135" width="80.6" height="84.083" transform="translate(45.137 18.27)" xlinkHref="images/svg/Component%2030%20-%201-image27.png"/>
                    <image id="SWORD" width="109.616" height="111.118" transform="translate(12.897 11.821)" xlinkHref="images/svg/Component%2030%20-%201-image28.png"/>
                    </g>
                </g>
                <g id="Group_1862" data-name="Group 1862" transform="translate(473.484 29.638)">
                    <image id="Slime_3x" data-name="Slime@3x" width="316.223" height="286.913" transform="translate(0 0)" xlinkHref="images/svg/Component%2030%20-%201-image29.png"/>
                    <image id="Slime_Haven_Text_3x" data-name="Slime Haven Text@3x" width="241.851" height="163.951" transform="translate(37.261 59.618)" xlinkHref="images/svg/Component%2030%20-%201-image30.png"/>
                </g>
            </svg>
        </div>
    );

}

export default Slime