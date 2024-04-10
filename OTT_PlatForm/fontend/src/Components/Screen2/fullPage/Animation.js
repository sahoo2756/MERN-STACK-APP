import { gsap } from "gsap/gsap-core";

export default function makeAnimateTheVideo ({staggerTime}) {
    gsap.from('.video-scroll-css' , {
        delay: 2,
        width : "0%",
        duration : 2,
        stagger : 10,
         repeat : -1,
         opacity : 0
    })
}

