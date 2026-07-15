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

const Home = () => {

    return (
        <>
            {/* Wallpaper background behind the text */}
            <div className="relative">
                <div
                    className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${Wallpaper})` }}
                />
                <img src={CompanyLogo} className="mt-20 flex items-center mx-auto max-w-4xl h-20" />
                <h1 className="italic mx-auto max-w-4xl  mt-0 text-3xl font-bold text-gray-900 sm:text-4xl  mb-10 text-center sm:mb-0">
                    All India Biscuits and Confectionery Manufacturers and Exporters Association
                </h1>

                {/* Two-column: left = Melody image + Manufacturers, right = Introduction */}
                <div className="mx-auto max-w-6xl flex flex-col gap-6 px-4 md:flex-row md:items-start">
                    {/* Left column */}
                    <div className="flex-1 space-y-6">
                        <img
                            src={Melody}
                            alt="Melody"
                            className="mx-auto h-72 w-auto max-w-full rounded-2xl object-contain sm:h-80 md:h-96"
                        />
                        <div className="rounded-2xl bg-white p-6">
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

                    {/* Right column: Introduction */}
                    <div className="flex-1">
                        <div className="rounded-2xl bg-white p-6">
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
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6">

                <div className="mt-">
                    <h3 className="text-xl font-semibold text-gray-900 max-[850px]:text-center">
                        Examples :-
                    </h3>

                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                        {/* Biscuits */}
                        <div className="rounded-xl border border-gray-200 p-4">
                            <h4 className="text-lg font-semibold text-blue-600">
                                Biscuits
                            </h4>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Sweet</li>
                                <li>Semi-sweet</li>
                                <li>Crackers</li>
                                <li>Cookies</li>
                                <li>Speciality biscuits</li>
                            </ul>
                        </div>

                        {/* Confectionery */}
                        <div className="rounded-xl border border-gray-200 p-4">
                            <h4 className="text-lg font-semibold text-pink-600">
                                Confectionery
                            </h4>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Chocolates</li>
                                <li>Candies</li>
                                <li>Toffees</li>
                                <li>Chewing gum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Ingredients />
            <BiscuitProcess />
            <ConfectioneryProcess />
            <Footer />
        </>
    )
}

export default Home;