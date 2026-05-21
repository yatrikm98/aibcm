import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageSlider = ({ Images }) => {
    const positions = ["center", "left1", "left", "right", "right1"];
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 1100);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setPositionIndex((prevIndex) =>
            prevIndex.map((prev) => (prev + 1) % positions.length)
        );
    };

    const imageVariants = isSmall
        ? {
            center: {
                x: "-50%",
                y: "-50%",
                scale: 1,
                zIndex: 5,
            },
            left1: {
                x: "-82%",
                y: "-50%",
                scale: 0.82,
                zIndex: 4,
            },
            left: {
                x: "-112%",
                y: "-50%",
                scale: 0.62,
                zIndex: 3,
            },
            right: {
                x: "12%",
                y: "-50%",
                scale: 0.62,
                zIndex: 3,
            },
            right1: {
                x: "-18%",
                y: "-50%",
                scale: 0.82,
                zIndex: 4,
            },
        }
        : {
            center: {
                x: "-50%",
                y: "-50%",
                scale: 1,
                zIndex: 5,
            },
            left1: {
                x: "-105%",
                y: "-50%",
                scale: 0.85,
                zIndex: 4,
            },
            left: {
                x: "-145%",
                y: "-50%",
                scale: 0.65,
                zIndex: 3,
            },
            right: {
                x: "45%",
                y: "-50%",
                scale: 0.65,
                zIndex: 3,
            },
            right1: {
                x: "15%",
                y: "-50%",
                scale: 0.85,
                zIndex: 4,
            },
        };

    const imageSizeClass = isSmall
        ? "w-[clamp(95px,18vw,220px)] h-[clamp(95px,18vw,220px)]"
        : "w-[clamp(180px,20vw,420px)] h-[clamp(180px,20vw,420px)]";

    return (
        <div
            className="
        relative mx-auto mt-10 mb-10 w-full max-w-6xl overflow-hidden bg-black px-3 py-6
        min-h-[320px] sm:min-h-[450px] lg:min-h-[600px]
        max-[640px]:top-[40px] max-[640px]:h-[400px]
      "
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                    {Images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`slide-${index}`}
                            className="
          absolute left-1/2 top-1/2
          rounded-2xl object-contain shadow-2xl

          w-[420px] h-[420px]

          max-[1100px]:w-[320px]
          max-[1100px]:h-[320px]

          max-[700px]:w-[220px]
          max-[700px]:h-[220px]

          max-[500px]:w-[160px]
          max-[500px]:h-[160px]
        "
                            initial={false}
                            animate={positions[positionIndex[index]]}
                            variants={imageVariants}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={handleNext}
                className="
          absolute left-1/2 bottom-3 z-20 -translate-x-1/2 rounded-lg bg-indigo-500
          px-4 py-2 text-xs font-medium text-white transition hover:bg-indigo-600
          max-[1023px]:bottom-3 sm:bottom-5 sm:px-6 sm:py-3 sm:text-sm 
        "
            >
                Next
            </button>
        </div>
    );
};

export default ImageSlider;