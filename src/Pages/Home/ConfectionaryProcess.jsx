import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Ingredients from '../../Images/ConfectionaryProcess/Ingredients.jpg'
import Blending from '../../Images/ConfectionaryProcess/Blending.jpg'
import Packing from '../../Images/ConfectionaryProcess/Packing.jpg'
import Shaping from '../../Images/ConfectionaryProcess/Shaping.jpg'


const ConfectioneryProcess = () => {

    const confectionerySlides = [
        {
            title: "Ingredient Preparation",
            step: "Step 1",
            image: Ingredients,
            text: "Sugar, cocoa, milk, glucose syrup, butter, and flavoring ingredients are prepared and measured.",
        },
        {
            title: "Cooking Process",
            step: "Step 2",
            image: Blending,
            text: "The ingredients are heated and blended carefully to achieve the desired sweetness and texture.",
        },
        {
            title: "Shaping and Molding",
            step: "Step 3",
            image: Shaping,
            text: "The confectionery mixture is shaped into candies, chocolates, gummies, or other sweet products.",
        },
        {
            title: "Cooling and Packaging",
            step: "Step 4",
            image: Packing,
            text: "Products are cooled for texture stabilization and then packed for distribution and sale.",
        }
    ];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 120 : -120,
            opacity: 0,
            scale: 0.98,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -120 : 120,
            opacity: 0,
            scale: 0.98,
        }),
    };

    const [[index, direction], setIndex] = useState([0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(([prev]) => [
                (prev + 1) % confectionerySlides.length,
                1,
            ]);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    const goNext = () => {
        setIndex(([prev]) => [
            (prev + 1) % confectionerySlides.length,
            1,
        ]);
    };

    const goPrev = () => {
        setIndex(([prev]) => [
            (prev - 1 + confectionerySlides.length) %
            confectionerySlides.length,
            -1,
        ]);
    };

    const slide = confectionerySlides[index];

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Confectionery Making Process
                    </h1>

                    <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
                        Ingredient preparation, cooking, molding, cooling, and
                        packaging in a simple animated React carousel.
                    </p>
                </div>

                <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Carousel */}
                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-200">
                        <div className="relative h-[28rem] sm:h-[34rem]">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={index}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.45,
                                        ease: "easeOut",
                                    }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">

                                        <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                                            {slide.step}
                                        </div>

                                        <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                                            {slide.title}
                                        </h2>

                                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
                                            {slide.text}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Previous */}
                            <button
                                onClick={goPrev}
                                aria-label="Previous slide"
                                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-900" />
                            </button>

                            {/* Next */}
                            <button
                                onClick={goNext}
                                aria-label="Next slide"
                                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
                            >
                                <ChevronRight className="h-5 w-5 text-gray-900" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="flex items-center justify-center gap-2 border-t border-gray-200 bg-white p-4">

                            {confectionerySlides.map((item, i) => (
                                <button
                                    key={item.title}
                                    onClick={() =>
                                        setIndex([i, i > index ? 1 : -1])
                                    }
                                    className={`h-2.5 rounded-full transition-all ${i === index
                                        ? "w-8 bg-blue-600"
                                        : "w-2.5 bg-gray-300"
                                        }`}
                                    aria-label={`Go to ${item.title}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="space-y-4">

                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">

                            <h3 className="text-xl font-semibold text-gray-900">
                                Process Summary
                            </h3>

                            <p className="mt-3 text-base leading-7 text-gray-700">
                                Confectionery products such as chocolates,
                                candies, toffees, and gummies are produced by
                                preparing ingredients, cooking the mixture,
                                molding the products into shapes, cooling them,
                                and finally packaging them for sale.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

                            {confectionerySlides.map((item, i) => (
                                <button
                                    key={item.title}
                                    onClick={() =>
                                        setIndex([i, i > index ? 1 : -1])
                                    }
                                    className={`rounded-2xl border p-4 text-left transition ${i === index
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200 bg-white hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="text-sm font-medium text-blue-600">
                                        {item.step}
                                    </div>

                                    <div className="mt-1 text-lg font-semibold text-gray-900">
                                        {item.title}
                                    </div>

                                    <div className="mt-2 text-sm leading-6 text-gray-600">
                                        {item.text}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto  max-w-6xl mt-5 ">
                <div className="flex justify-around max-[1150px]:flex-col max-[1150px]:items-center">
                    <iframe
                        className="aspect-video w-full max-w-lg max-[1150px]:max-w-4xl"
                        src="https://www.youtube.com/embed/2kttVyakHN4?si=FbnhNjSJW7bAqGol"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                    </iframe>
                    <iframe
                        className="aspect-video w-full max-w-lg max-[1150px]:mt-3 max-[1150px]:max-w-4xl"
                        src="https://www.youtube.com/embed/V6ze-6LBhhg?si=7wb46h220vwjqxHa"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className="flex justify-around max-[1150px]:flex-col max-[1150px]:items-center mt-2">

                    <iframe
                        className="aspect-video w-full max-w-lg max-[1150px]:mt-3 max-[1150px]:max-w-4xl"
                        src="https://www.youtube.com/embed/xPe1jMuX32s?si=AUeTzKMKvpOfEQUN"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; 
                autoplay; clipboard-write; 
                encrypted-media; gyroscope; p
                icture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>

                    <iframe
                        className="aspect-video w-full max-w-lg max-[1150px]:mt-3 max-[1150px]:max-w-4xl"
                        src="https://www.youtube.com/embed/_As1WwlSe5k?si=x0wo0T3aetAD-EgF"
                        title="YouTube video player" f
                        rameborder="0"
                        allow="accelerometer; 
                    autoplay; clipboard-write;
                     encrypted-media; gyroscope; 
                     picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                </div>

            </div>
            <div className="text-center mt-3 font-semibold text-[16px]">How are Confectionary Made.</div>
        </div>
    );
};

export default ConfectioneryProcess;