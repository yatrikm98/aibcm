import LinkComponent from '../components/Link.jsx'
import ImageSlider from '../miscellaneous/ImageSlider.jsx'
import Footer from '../Footer/Footer.jsx'


const Company = ({ data }) => {

    return (
        <>
            <div className="bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
                        <h1 className="flex flex-col items-center justify-center gap-3 text-3xl font-bold text-orange-400 sm:text-2xl text-center">
                            <img
                                src={data.logo}
                                alt={data.title}
                                className="h-14 w-14 shrink-0 rounded-md object-contain sm:h-16 sm:w-16"
                            />
                            <span>{data.title}</span>
                        </h1>
                        <p className="mt-4 text-base leading-8 text-gray-700 text-[16px]">
                            {data.overview}
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                            <h2 className="text-2xl font-semibold text-orange-400">
                                {data.segment} Segment Overview
                            </h2>

                            <div className="mt-5 space-y-4 text-gray-700">
                                <p className="leading-7">
                                    <span className="font-semibold">Annual Turnover:</span>
                                    <span className='text-[16px]'>
                                        {data.annualturnoverInfo}
                                    </span>
                                </p>
                                <p className="leading-7">
                                    <span className="font-semibold">Market Share:</span>
                                    <span className='text-[16px]'>
                                        {data.marketshare}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                            <h2 className="text-2xl font-semibold text-orange-400">
                                Numbers :-
                            </h2>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl bg-blue-50 p-4">
                                    <div className="text-sm font-medium text-blue-700">
                                        Total Revenue
                                    </div>
                                    <div className="mt-1 text-2xl font-bold text-gray-900">
                                        {data.totalIncome}
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-green-50 p-4">
                                    <div className="text-sm font-medium text-green-700">
                                        Net Profit
                                    </div>
                                    <div className="mt-1 text-2xl font-bold text-gray-900">
                                        {data.netprofit}
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-purple-50 p-4 sm:col-span-2">
                                    <div className="text-sm font-medium text-purple-700">
                                        Market Capitalization
                                    </div>
                                    <div className="mt-1 text-2xl font-bold text-gray-900">
                                        {data.marketcapitalization}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {data.title === "Mars Wrigley" ? <div className='text-center mt-3'>Note:- The company is in loss(in India) but worldwide it is booming.</div> : ""} */}
                    <ImageSlider Images={data.images} label={data.title} />
                    {data.title === 'Kamla International' || data.title === ' Mars Wrigley' ? "" : <div className='mx-auto h-0.5 w-[400px] max-w-full bg-gray-800 max-[650px]:mt-15' />}
                </div>
            </div>
        </>
    )

}

export default Company;