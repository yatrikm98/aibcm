import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Baking from '../../Images/BiscuitProcess/Baking.jpg'
import Cooling from '../../Images/BiscuitProcess/Cooling.jpg'
import Forming from '../../Images/BiscuitProcess/Forming.jpg'
import Mixing from '../../Images/BiscuitProcess/Mixing.jpg'
import ParleG from '../../videos/ParleG.mp4'
import Biscuit from '../../videos/Biscuit.mp4'



const BiscuitProcess = () => {

    const biscuitSlides = [
        {
            title: "Mixing",
            step: "Step 1",
            image: Baking,
            text: "Flour, fat, sugar, and other ingredients are combined into dough.",
        },
        {
            title: "Forming",
            step: "Step 2",
            image: Cooling,
            text: "The dough is rolled, cut, or shaped into biscuits of the required size.",
        },
        {
            title: "Cooling",
            step: "Step 3",
            image: Forming,
            text: "After baking, biscuits are cooled so they become stable for handling and packing.",
        },
        {
            title: "Baking",
            step: "Step 4",
            image: Mixing,
            text: "The shaped dough is baked until it becomes crisp and golden.",
        },
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

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(([prev]) => [(prev + 1) % biscuitSlides.length, 1]);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    const [[index, direction], setIndex] = useState([0, 0]);

    const goNext = () => {
        setIndex(([prev]) => [(prev + 1) % biscuitSlides.length, 1]);
    };

    const goPrev = () => {
        setIndex(([prev]) => [
            (prev - 1 + biscuitSlides.length) % biscuitSlides.length,
            -1,
        ]);
    };

    const slide = biscuitSlides[index];

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Biscuit Making Process
                    </h1>
                    <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
                        Mixing, forming, baking, cooling, and packaging in a simple animated
                        React carousel.
                    </p>
                </div>

                <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
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
                                    transition={{ duration: 0.45, ease: "easeOut" }}
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

                            <button
                                onClick={goPrev}
                                aria-label="Previous slide"
                                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-900" />
                            </button>

                            <button
                                onClick={goNext}
                                aria-label="Next slide"
                                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition hover:bg-white"
                            >
                                <ChevronRight className="h-5 w-5 text-gray-900" />
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-2 border-t border-gray-200 bg-white p-4">
                            {biscuitSlides.map((item, i) => (
                                <button
                                    key={item.title}
                                    onClick={() =>
                                        setIndex([i, i > index ? 1 : -1])
                                    }
                                    className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-blue-600" : "w-2.5 bg-gray-300"
                                        }`}
                                    aria-label={`Go to ${item.title}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Process Summary
                            </h3>
                            <p className="mt-3 text-base leading-7 text-gray-700">
                                Biscuits are usually made by combining ingredients into dough,
                                shaping them, baking them in an oven, cooling them so the
                                structure sets, and then packing them for distribution.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            {biscuitSlides.map((item, i) => (
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
            <div className="mx-auto max-w-6xl">
            <div className="flex justify-around max-[1150px]:flex-col max-[1150px]:items-center mt-2">
                <div>
                    <span>Parle G :-</span>
                    <video
                        className="aspect-video w-full max-w-lg rounded-xl max-[1150px]:mt-3 max-[1150px]:max-w-4xl"
                        src={ParleG}
                        controls
                        playsInline
                    />
                </div>
                <div>
                    <span>Biscuit :-</span>
                    <video
                        className="aspect-video w-full max-w-lg rounded-xl max-[1150px]:mt-3 max-[1150px]:max-w-4xl"
                        src={Biscuit}
                        controls
                        playsInline
                    />
                </div>
            </div>
            </div>
            <div className="text-center mt-3 font-semibold text-[16px]">How are Biscuits Made.</div>
        </div>
    )

}


export default BiscuitProcess