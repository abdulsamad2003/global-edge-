import React, { useEffect, useRef } from 'react';
import './LoadingAnim.scss';
import { gsap } from 'gsap';

function LoadingAnim() {
  const textAnimationRef = useRef(null);

  useEffect(() =>{
    setTimeout(()=>{
        gsap.to(".loading-container", {
            y: "-100%",
            duration: 1,
            ease: "power2.out",
          });
    }, 3000)
  },[])

  return (
    <section className="loading-container">
      <main className="text-container">
        <svg className="main-font text-stroke" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
          <text className="text" x="50%" y="50%" textAnchor="middle" ref={textAnimationRef}>
            Prefex Solution
          </text>
        </svg>
      </main>
    </section>
  );
}

export default LoadingAnim;
