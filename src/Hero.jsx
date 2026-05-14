import { useRef } from "react";
import hero1 from "./images/hero1.jpg"
import hero2 from "./images/hero2.jpg"
import hero3 from "./images/hero3.jpg"
export default function Hero (){
     const sliderRef = useRef(null);
   const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };
    return(
        <div className="relative overflow-hidden w-full h-5/6 bg-blue-200 scrollbar-none">
            <button
                onClick={scrollLeft}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 
                rounded-full text-2xl font-bold" >
                ←
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 
                rounded-full text-2xl font-bold" >
                →
            </button>
            <div className=" w-full h-full flex  overflow-x-auto scroll-smooth snap-x snap-mandatory " ref={sliderRef}>
                <div className="min-w-full m-auto h-full flex justify-around py-20 snap-start">
                    <div className="w-2/6 text-base/9 my-auto">
                        <h1 className="capitalize font-bold text-2xl">75% off for your first shopping</h1>
                        <p>amet consectetur adipisicing elit. suscipit perspiciatis adipisci nam minima in?</p>
                        <p className="bg-blue-800 w-40 h-11 rounded-xl pt-1 cursor-pointer text-white text-center m-y-auto ">Visit Your Collection</p>
                    </div>
                    <img src={hero1} alt="Home-Hero-Image" draggable="false" 
                    className="w-80 h-100 rounded-lg"/>
                </div>
                <div className="min-w-full m-auto h-full flex justify-around py-20 snap-start">
                    <div className="w-2/6 text-base/9 my-auto">
                        <h1 className="capitalize font-bold text-2xl">30% off for your first shopping for mobile section</h1>
                        <p>amet consectetur adipisicing elit. suscipit perspiciatis adipisci nam minima in?</p>
                        <p className="bg-blue-800 w-40 h-11 rounded-xl pt-1 cursor-pointer text-white text-center m-y-auto ">Visit Your Collection</p>
                    </div>
                    <img src={hero2} alt="Home-Hero-Image" draggable="false" 
                    className="w-80 h-5/6 rounded-lg"/>
                </div>
                <div className="min-w-full m-auto h-full flex justify-around py-20 snap-start">
                    <div className="w-2/6 text-base/9 my-auto">
                        <h1 className="capitalize font-bold text-2xl">50% off for your first shopping for headphone section</h1>
                        <p>amet consectetur adipisicing elit. suscipit perspiciatis adipisci nam minima in?</p>
                        <p className="bg-blue-800 w-40 h-11 rounded-xl pt-1 cursor-pointer text-white text-center m-y-auto ">Visit Your Collection</p>
                    </div>
                    <img src={hero3} alt="Home-Hero-Image" draggable="false" 
                    className="w-80 h-100 rounded-lg"/>
                </div>
            </div>
        </div>
    )
}
