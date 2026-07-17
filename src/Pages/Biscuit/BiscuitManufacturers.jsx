import BiscuitCompanyData from '../../Data/CompanyData/BiscuitCompanyData.jsx'
import Company from "../components/Company.jsx";
import Footer from '../Footer/Footer.jsx';


const BiscuitManufacturers = () => {

    const renderedData = BiscuitCompanyData.map((data,index)=>{
        return <Company data = {data} key={index}/>
    })

    return (
        <div className="bg-gray-50">
            <div className="text-center text-3xl font-bold text-gray-900 bg-gray-50 p-4 mt-15">Top 5 Companies Information :- </div>
            <div className="mx-auto max-w-6xl font-bold text-3xl bg-gray-50 max-[1100px]:text-center"> 1) Biscuit Manufacturers and Exporters.</div>
            {renderedData}
            <Footer />
        </div>
    )

}

export default BiscuitManufacturers