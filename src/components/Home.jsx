import React, { useEffect, useRef } from 'react';
import gradientbg from "../assets/gradientbg.jpg";
import banner from "../assets/banner.jpg";
import blackshade from "../assets/black-shade.png";

const Home = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  
  useEffect(() => {
    // For image animation
    const imageElement = imageRef.current;
    // For text animations
    const headingElement = headingRef.current;
    const subheadingElement = subheadingRef.current;
    
    // Initial states
    if (imageElement) {
      imageElement.style.transform = 'scale(1.2)';
      imageElement.style.opacity = '0.6';
      imageElement.style.transition = 'transform .5s ease-out, opacity 1.2s ease-out';
    }
    
    if (headingElement) {
      headingElement.style.transform = 'translateY(40px) rotateX(10deg)';
      headingElement.style.opacity = '0';
      headingElement.style.filter = 'blur(8px)';
      headingElement.style.transition = 'transform 1s ease-out, opacity 1s ease-out, filter 1s ease-out';
      headingElement.style.transitionDelay = '0.5s';
    }
    
    if (subheadingElement) {
      subheadingElement.style.transform = 'translateY(30px) rotateX(10deg)';
      subheadingElement.style.opacity = '0';
      subheadingElement.style.filter = 'blur(8px)';
      subheadingElement.style.transition = 'transform 1s ease-out, opacity 1s ease-out, filter 1s ease-out';
      subheadingElement.style.transitionDelay = '0.8s';
    }
    
    // Reveal animation on load
    const timeout = setTimeout(() => {
      if (imageElement) {
        imageElement.style.transform = 'scale(1)';
        imageElement.style.opacity = '1';
      }
      
      if (headingElement) {
        headingElement.style.transform = 'translateY(0) rotateX(0)';
        headingElement.style.opacity = '1';
        headingElement.style.filter = 'blur(0)';
      }
      
      if (subheadingElement) {
        subheadingElement.style.transform = 'translateY(0) rotateX(0)';
        subheadingElement.style.opacity = '1';
        subheadingElement.style.filter = 'blur(0)';
      }
    }, 100);
    
    // Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === imageElement) {
              imageElement.style.transform = 'scale(1)';
              imageElement.style.opacity = '1';
            } else if (entry.target === headingElement) {
              headingElement.style.transform = 'translateY(0) rotateX(0)';
              headingElement.style.opacity = '1';
              headingElement.style.filter = 'blur(0)';
            } else if (entry.target === subheadingElement) {
              subheadingElement.style.transform = 'translateY(0) rotateX(0)';
              subheadingElement.style.opacity = '1';
              subheadingElement.style.filter = 'blur(0)';
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (imageElement) observer.observe(imageElement);
    if (headingElement) observer.observe(headingElement);
    if (subheadingElement) observer.observe(subheadingElement);
    
    return () => {
      clearTimeout(timeout);
      if (imageElement) observer.unobserve(imageElement);
      if (headingElement) observer.unobserve(headingElement);
      if (subheadingElement) observer.unobserve(subheadingElement);
    };
  }, []);
  
  return (
    <div className='relative h-screen flex flex-col justify-center overflow-hidden items-center'>
      <div className='absolute top-0 bottom-0 left-0 right-0 z-20'>
        <img 
          src={blackshade} 
          alt="" 
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute top-0 left-0 right-0 z-10 bottom-0 h-full w-full opacity-50 mix-blend-multiply'>
        <img 
          ref={imageRef} 
          src={banner} 
          alt="" 
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex px-2 flex-col justify-center items-center absolute z-20 h-full w-full backdrop-blur-sm'>
        <div 
          ref={headingRef} 
          className='text-3xl md:text-4xl lg:text-6xl md:mb-3 lg:mb-5 mb-5 text-center text-[#fff] perspective-1000'
        >
          We're Undergoing a <span className=''>Digital Makeover</span>
        </div>
        <div 
          ref={subheadingRef} 
          className='md:px-10 px-4 py-2 text-[12px] md:text-base rounded-3xl border text-[#ffffff] backdrop-blur-3xl bg-[#ffffff0e] perspective-1000'
        >
          Stay Tuned! Something Exciting is Coming Your Way!
        </div>
      </div>
    </div>
  );
};

export default Home;