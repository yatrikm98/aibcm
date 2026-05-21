import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BiscuitProcess from "./BiscuitProcess.jsx";
import ConfectioneryProcess from "./ConfectionaryProcess.jsx";
import CompanyLogo from '../../assets/CompanyLogo.svg'
import Footer from "../Footer/Footer.jsx";

const Home = () => {

    return (
        <>
        <img src={CompanyLogo} className="mt-20 flex items-center mx-auto max-w-4xl h-20"/>
            <h1 className="mx-auto max-w-4xl  mt-0 text-3xl font-bold text-gray-900 sm:text-4xl  mb-10 text-center sm:mb-0">
                All India Biscuits and Confectionery Manufacturers and Exporters Association
            </h1>
            {/* Introduction */}
            <div className="rounded-2xl bg-white p-6 mx-auto max-w-3xl">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 max-[850px]:text-center">
                    Introduction
                </h2>
                <p className="text-gray-700 leading-8 max-[850px]:text-center">
                    The All India Biscuits and Confectionery Manufacturers and Exporters
                    Association is a Delhi-registered, private, non-profit organization
                    incorporated in 2021 (CIN: U91990DL2021NPL390522). It functions as a
                    membership organization aimed at supporting the industry, with a focus
                    on manufacturing and exporting.
                </p>
            </div>
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6">
                <h2 className="text-2xl font-semibold text-gray-900 max-[850px]:text-center">
                    Biscuits and Confectionery Manufacturers
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-700 max-[850px]:text-center">
                    <span>
                        Biscuits and Confectionery Manufacturers
                    </span>{' '}
                    simply means:
                </p>
                <div className="max-[850px]:text-center">
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700 max-[850px]:text-left max-[850px]:inline-block">
                        <li>Companies or businesses that make biscuits/cookies.</li>
                        <li>Companies that produce sweets and candy products.</li>
                    </ul>
                </div>
                <div className="mt-6">
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
                                <li>Cookies</li>
                                <li>Crackers</li>
                                <li>Cream biscuits</li>
                                <li>Digestive biscuits</li>
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
            <BiscuitProcess />
            <ConfectioneryProcess />
            <Footer/>
        </>
    )
}

export default Home;