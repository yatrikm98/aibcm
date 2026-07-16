import Company from "../components/Company.jsx";
import ConfectionaryCompanyData from '../../Data/CompanyData/ConfectionaryCompanyData.jsx'
import Footer from "../Footer/Footer.jsx";
import Seo from "../components/Seo.jsx";


const ConfectionaryManufacturers = () => {

    const renderedData = ConfectionaryCompanyData.map((data,index)=>{
        return <Company data = {data} key={index}/>
    })

    return (

        <div className="bg-gray-50">
            <Seo
                title="Top Confectionery Manufacturers & Exporters in India | AIBCM"
                description="Discover top confectionery manufacturers and exporters in India — chocolates, candies, toffees and more — with company overviews, turnover, market share, and financials by AIBCM."
            />
            <div className="text-center text-3xl font-bold text-gray-900 bg-gray-50 p-4 mt-15">Top 5 Companies Information :- </div>
            <div className="mx-auto max-w-6xl font-bold text-3xl bg-gray-50 max-[1100px]:text-center"> 1) Confectionary Manufacturers and Exporters.</div>
            {renderedData}
            <Footer/>
        </div>
        
    )

}

export default ConfectionaryManufacturers