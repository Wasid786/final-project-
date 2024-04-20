import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

export default function SpecialProgram() {
    const featuredProducts = [
        "../images/img01.jpg",
        "../images/img02.webp",
        "../images/img03.webp",
        // "../images/img04.png",
    ];

    let count = 0;
    let slideInterval;
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    return (
        <div ref={slideRef} className="w-full select-none relative z-0">
          <div>
            <img src={featuredProducts[currentIndex]} className="w-full md:h-72" alt="" />
          </div>
      
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition md:hidden"
              onClick={handleOnPrevClick}
            >
              <AiOutlineVerticalRight size={24} />
            </button>
            <button
              className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition md:hidden"
              onClick={handleOnNextClick}
            >
              <AiOutlineVerticalLeft size={24} />
            </button>
          </div>
        </div>
      );
      
}
