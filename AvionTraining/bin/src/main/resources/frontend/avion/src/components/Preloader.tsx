/// <reference types="./gsap-core.d.ts" />

// import { useEffect } from 'react';
// import { gsap } from 'gsap';
// import anime from 'animejs/lib/anime.es.js';
// import 'avion\src\components\Preloader.css';

// const Preloader = () => {
//     useEffect(() => {
//         gsap.stagger(
//             {
//                 from: {
//                     x: "-60",
//                     ease: Power3.easeInOut,
//                     opacity: "0",
//                 },
//                 to: {
//                     x: "60",
//                     ease: Power3.easeInOut,
//                     delay: 1.2,
//                     opacity: "0",
//                 },
//             },
//             0.8,
//             ".titles > div",
//             2
//         );

//         gsap.stagger(
//             {
//                 from: {
//                     x: "-1600",
//                     delay: 4.2,
//                     ease: Expo.easeInOut,
//                 },
//                 to: {
//                     x: "1600",
//                     delay: 6.8,
//                     ease: Expo.easeInOut,
//                 },
//             },
//             0.16,
//             "li",
//             0.2
//         );

//         const textWrapper = document.querySelector(".header");
//         textWrapper.innerHTML = textWrapper.textContent.replace(
//             /\S/g,
//             "<span class='letter'>$&</span>"
//         );

//         anime.timeline().add({
//             targets: ".header .letter",
//             opacity: [0, 1],
//             translateY: [80, 0],
//             translateZ: 0,
//             easing: "easeOutExpo",
//             duration: 1400,
//             delay: (el, i) => 8400 + 20 * i,
//         });
//     }, []);

//     return (
//         <div className="container">
//             <h1 className="header">
//                 AVION
//             </h1>

//             <div className="titles">
//                 <div className="title title-1"><h1>Sky's</h1></div>
//                 <div className="title title-2"><h1>The</h1></div>
//                 <div className="title title-3"><h1>Limit</h1></div>
//             </div>
//             <ul className="blocks">
//                 <li className="block-1 block"></li>
//                 <li className="block-2 block"></li>
//                 <li className="block-3 block"></li>
//                 <li className="block-4 block"></li>
//                 <li className="block-5 block"></li>
//                 <li className="block-6 block"></li>
//             </ul>
//         </div>
//     );
// };

// export default Preloader;

import { useEffect } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = () => {
    useEffect(() => {
        const titles = gsap.utils.toArray(".titles > div");
        const blocks = gsap.utils.toArray("li");

        gsap.to(titles, {
            x: "+=60",
            opacity: 0,
            ease: "power3.inOut",
            stagger: 0.8,
            delay: 1.2
        });

        gsap.to(blocks, {
            x: "+=1600",
            ease: "expo.inOut",
            stagger: 0.16,
            delay: 4.2
        });

        const textWrapper = document.querySelector(".header") as HTMLElement;
        if (textWrapper.textContent !== null) {
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        gsap.to(".header .letter", {
            opacity: 1,
            y: 0,
            z: 0,
            ease: "expo.out",
            duration: 1400,
            stagger: {
                amount: 0.2,
                from: "center",
                grid: [10, 5]
            },
            delay: (i) => 8400 + 20 * i
        });
    }, []);

    return (
        <div className="container">
            <h3 className="header">
                Sky's the Limit...
            </h3>
            

            {/* <div className="titles">
                <div className="title title-1"><h1>Sky's</h1></div>
                <div className="title title-2"><h1>The</h1></div>
                <div className="title title-3"><h1>Limit</h1></div>
            </div> */}
            <ul className="blocks">
                <li className="block-1 block"></li>
                <li className="block-2 block"></li>
                <li className="block-3 block"></li>
                <li className="block-4 block"></li>
                <li className="block-5 block"></li>
                <li className="block-6 block"></li>
            </ul>
            
        </div>
    );
};

export default Preloader;
