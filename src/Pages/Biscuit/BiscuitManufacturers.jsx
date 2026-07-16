import BiscuitCompanyData from '../../Data/CompanyData/BiscuitCompanyData.jsx'
import Company from "../components/Company.jsx";
import Footer from '../Footer/Footer.jsx';
import Seo from '../components/Seo.jsx';


const BiscuitManufacturers = () => {

    const renderedData = BiscuitCompanyData.map((data,index)=>{
        return <Company data = {data} key={index}/>
    })

    return (
        <div className="bg-gray-50">
            <Seo
                title="Top Biscuit Manufacturers & Exporters in India | AIBCM"
                description="Explore leading biscuit manufacturers and exporters in India with company overviews, segments, turnover, market share, and key financial figures — compiled by AIBCM."
            />
            <div className="text-center text-3xl font-bold text-gray-900 bg-gray-50 p-4 mt-15">Top 3 Companies Information :- </div>
            <div className="mx-auto max-w-6xl font-bold text-3xl bg-gray-50 max-[1100px]:text-center"> 1) Biscuit Manufacturers and Exporters.</div>
            {renderedData}
            <Footer />
        </div>
    )

}

export default BiscuitManufacturers