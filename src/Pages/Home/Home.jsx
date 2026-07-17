import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BiscuitProcess from "./BiscuitProcess.jsx";
import ConfectioneryProcess from "./ConfectionaryProcess.jsx";
import CompanyLogo from '../../assets/CompanyLogo.svg'
import Footer from "../Footer/Footer.jsx";
import Ingredients from "./Ingredients.jsx";
import Melody from '../../Images/Melody.avif'
import Wallpaper from '../../Images/Wallpaper.png'
import Cookies from '../../BiscuitLogos/Cookies.avif'
import Crackers from '../../BiscuitLogos/Crackers.avif'
import SemiSweetBiscuit from '../../BiscuitLogos/SemiSweetBiscuit.jpg'
import SweetBiscuit from '../../BiscuitLogos/SweetBiscuit.jpg'
import SpecialityBiscuit from '../../BiscuitLogos/SpecialityBiscuits.jpg'
import Candies from '../../Confectionery-Logos/Candies.avif'
import ChewingGum from '../../Confectionery-Logos/ChewingGum.webp'
import Chocolate from '../../Confectionery-Logos/Chocolate.jpg'
import Toffies from '../../Confectionery-Logos/Toffies.jpg'


import BarleyPowder from '../../Images/Ingredients/BarleyPowder.png'
import Cheese from '../../Images/Ingredients/Cheese.jpg'
import ChinaGrass from '../../Images/Ingredients/ChinaGrass.jpg'
import Cocoa from '../../Images/Ingredients/Cocoa.jpg'
import Dextrose from '../../Images/Ingredients/Dextrose.jpeg'
import Glycerine from '../../Images/Ingredients/Glycerine.webp'
import Jaggery from '../../Images/Ingredients/Jaggery.webp'
import PeanutButter from '../../Images/Ingredients/PeanutButter.jpg'
import RiceStarch from '../../Images/Ingredients/RiceStarch.png'
import Sugar from '../../Images/Ingredients/Sugar.jpg'

import InstagramEmbed from "../components/Instagram.jsx";


const carouselItems = [
    { src: SweetBiscuit, label: "Sweet Biscuits" },
    { src: SemiSweetBiscuit, label: "Semi-sweet Biscuits" },
    { src: Crackers, label: "Crackers" },
    { src: Cookies, label: "Cookies" },
    { src: SpecialityBiscuit, label: "Speciality Biscuits" },
    { src: Chocolate, label: "Chocolates" },
    { src: Candies, label: "Candies" },
    { src: Toffies, label: "Toffees" },
    { src: ChewingGum, label: "Chewing Gum" },
];

const ingredientItems = [
    { src: BarleyPowder, label: "Barley Powder" },
    { src: Cheese, label: "Cheese" },
    { src: ChinaGrass, label: "China Grass" },
    { src: Cocoa, label: "Cocoa" },
    { src: Dextrose, label: "Dextrose" },
    { src: Glycerine, label: "Glycerine" },
    { src: Jaggery, label: "Jaggery" },
    { src: PeanutButter, label: "Peanut Butter" },
    { src: RiceStarch, label: "Rice Starch" },
    { src: Sugar, label: "Sugar" },
];

const Carousel = ({ items }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (dir) => {
        setDirection(dir);
        setIndex((prev) => (prev + dir + items.length) % items.length);
    };

    useEffect(() => {
        const timer = setInterval(() => paginate(1), 4000);
        return () => clearInterval(timer);
    }, []);

    const current = items[index];

    return (
        <div className="mx-auto mt-10 max-w-6xl px-4">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className="relative h-72 sm:h-96">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={index}
                            custom={direction}
                            initial={{ opacity: 0, x: direction >= 0 ? 300 : -300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction >= 0 ? -300 : 300 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6"
                        >
                            <img
                                src={current.src}
                                alt={current.label}
                                className="max-h-52 w-auto rounded-xl object-contain sm:max-h-72"
                            />
                            <span className="text-lg font-semibold text-gray-900 sm:text-xl mb-10">
                                {current.label}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Prev / Next controls */}
                <button
                    type="button"
                    onClick={() => paginate(-1)}
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    type="button"
                    onClick={() => paginate(1)}
                    aria-label="Next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => {
                                setDirection(i > index ? 1 : -1);
                                setIndex(i);
                            }}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-gray-800" : "w-2.5 bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Home = () => {

    return (
        <>
            {/* Wallpaper background behind the text */}
            <div className="relative">
                <div
                    className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${Wallpaper})` }}
                />
                <img src={CompanyLogo} alt="Company Logo" className="mt-20 flex items-center mx-auto max-w-4xl h-20" />
                <h1 className="italic mx-auto max-w-4xl  mt-0 text-3xl font-bold text-gray-900 sm:text-4xl  mb-10 text-center sm:mb-6">
                    All India Biscuits and Confectionery Manufacturers and Exporters Association
                </h1>

                {/* Two-column: left = Melody image, right = Manufacturers + Introduction */}
                <div className="mx-auto max-w-6xl flex flex-col gap-4 px-4 md:flex-row md:items-stretch md:h-[36rem]">
                    {/* Left column: Melody image */}
                    <div className="flex-1 md:h-full">
                        {/* <img
                            src={Melody}
                            alt="Melody"
                            className="h-auto max-h-full w-full rounded-2xl object-contain sm:h-44 md:h-full"
                        /> */}
                        <InstagramEmbed />
                    </div>

                    {/* Right column: Introduction + Manufacturers */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4">
                            <h2 className="italic mb-4 text-2xl font-semibold text-gray-900 max-[850px]:text-center">
                                Introduction
                            </h2>
                            <p className="italic text-gray-700 leading-8 max-[850px]:text-center">
                                The All India Biscuits and Confectionery Manufacturers and Exporters
                                Association is a Delhi-registered, private, non-profit organization
                                incorporated in 2021 (CIN: U91990DL2021NPL390522). It functions as a
                                membership organization aimed at supporting the industry, with a focus
                                on manufacturing and exporting.
                            </p>
                        </div>
                        <div className="flex-1 overflow-auto rounded-2xl border border-gray-200 bg-white p-4">
                            <h2 className="italic text-2xl font-semibold text-gray-900 max-[850px]:text-center">
                                Biscuits and Confectionery Manufacturers
                            </h2>
                            <p className="mt-4 text-base leading-7 text-gray-700 max-[850px]:text-center">
                                <span className="italic">
                                    Biscuits and Confectionery Manufacturers
                                </span>{' '}
                                simply means:
                            </p>
                            <div className="max-[850px]:text-center italic">
                                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700 max-[850px]:text-left max-[850px]:inline-block">
                                    <li>Companies or businesses that make biscuits/cookies.</li>
                                    <li>Companies that produce sweets and candy products.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6">

                <div className="mt-">
                    <h3 className="text-xl font-semibold text-gray-900 max-[850px]:text-center">
                        Examples
                    </h3>

                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                        {/* Biscuits */}
                        <div className="rounded-xl border border-gray-200 p-4">
                            <h4 className="text-lg font-semibold text-blue-600">
                                Biscuits
                            </h4>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Sweet
                                        <img src={SweetBiscuit} alt="Sweet Biscuit" className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Semi-sweet
                                        <img alt="SemiSweetBiscuit" src={SemiSweetBiscuit} className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Crackers
                                        <img alt="Crackers" src={Crackers} className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Cookies
                                        <img alt="Cookies" src={Cookies} className="h-10 w-auto rounded" />
                                    </span>

                                </li>
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Speciality biscuits
                                        <img alt="SpecialityBiscuit" src={SpecialityBiscuit} className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Confectionery */}
                        <div className="rounded-xl border border-gray-200 p-4">
                            <h4 className="text-lg font-semibold text-pink-600">
                                Confectionery
                            </h4>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                                <li>

                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Chocolates
                                        <img src={Chocolate} alt="Chocolate" className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Candies
                                        <img src={Candies} alt="Candies" className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Toffees
                                        <img src={Toffies} alt="Toffies" className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                                <li>
                                    <span className="inline-flex items-center gap-2 align-middle text-lg">
                                        Chewing gum
                                        <img src={ChewingGum} className="h-10 w-auto rounded" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel items={carouselItems} />
            <Ingredients />
            <Carousel items={ingredientItems} />
            <BiscuitProcess />
            <ConfectioneryProcess />
            <Footer />
        </>
    )
}

export default Home;