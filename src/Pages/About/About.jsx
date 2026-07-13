import KamleshSoni from '../../Images/KamleshSoni.jpeg';
import TimothyBochu from '../../Images/TimothyBochu.jpeg';
import CompanyLogo from '../../assets/CompanyLogo.svg'
import Footer from '../Footer/Footer';
import SharadMeshram from '../../Images/SharadMeshram.jpeg'
import AshishJha from '../../Images/AshishJha.jpeg'


const About = () => {

  const companyInfo = [
    { label: 'CIN', value: 'U91990DL2021NPL390522' },
    {
      label: 'Name',
      value: 'ALL INDIA BISCUITS AND CONFECTIONERY MANUFACTURERS AND EXPORTERS ASSOCIATION',
    },
    { label: 'Listed on Stock Exchange', value: 'Unlisted' },
    { label: 'Company Status', value: 'Active' },
    { label: 'ROC', value: 'ROC Delhi' },
    { label: 'Registration Number', value: '390522' },
    { label: 'Company Category', value: 'Company limited by guarantee' },
    { label: 'Company Sub Category', value: 'Non-government company' },
    { label: 'Class of Company', value: 'Private' },
    { label: 'Date of Incorporation', value: '2021-11-26' },
    { label: 'Age of Company', value: '4 years, 5 months, 20 days' },
    {
      label: 'Activity',
      value:
        'NIC Code: 9199 - Activities of other membership organizations n.e.c.',
    },
  ];



  const complianceData = [
    {
      label: 'Date of Last Annual General Meeting (2026-2027)',
      value: '2026-07-10',
    },
    {
      label: 'Date of General Meeting (2025-2026)',
      value: '2025-09-25',
    },
    {
      label: 'Date of General Meeting (2024-2025)',
      value: '2024-09-27',
    },
    {
      label: 'Date of General Meeting (2023-2024)',
      value: '2023-09-29',
    },
    {
      label: 'Date of General Meeting (2022-2023)',
      value: '2022-09-30',
    },
    {
      label: 'Date of Last Filed Balance Sheet',
      value: '2022-03-31',
    },
  ];


  return (
    <>
      <div className="bg-white py-10 mt-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-orange-400 lg:mt-8 sm:text-4xl mt-20 ">
              About Us
            </h1>
            <img src={CompanyLogo} className="mt-10 flex items-center mx-auto max-w-4xl h-20" />
            <div className="mx-auto flex mt-10 flex justify-center gap-4 text-center rounded-2xl bg-white p-6 shadow-sm">
              <h1 className="text-xl text-gray-900 sm:text-xl flex items-center">
                All India Biscuits and Confectionery Manufacturers and Exporters
                Association
              </h1>
            </div>
          </div>



          {/* Overview */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-orange-400 text-center">
              Overview
            </h2>

            <p className="text-gray-700 leading-8 text-center">
              The association is located in Tilak Nagar, Delhi, near Janakpuri East
              Metro Station. It serves as a one-stop destination supporting businesses
              associated with biscuits and confectionery manufacturing and exports.
              The organization focuses on industry development, customer satisfaction,
              and expanding services to cater to a larger client base.
            </p>
          </div>

          {/* Directors */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-center text-2xl font-semibold text-orange-400 ">
              Key Personnel:
            </h2>
            <div className='mb-3 text-center font-semibold text-xl mb-5'>The company's active directors are :-
              <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="flex w-80 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
                  <h2 className="mb-4 text-center text-xl font-semibold text-orange-500">
                    Honorary Secretary
                  </h2>

                  <img
                    src={KamleshSoni}
                    alt="Kamlesh Soni"
                    className="mx-auto h-72 w-64 rounded-xl object-cover"
                    loading="lazy"
                  />

                  <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">
                    Kamlesh Mulchand Soni
                  </h3>

                  <div className="mt-4 flex-1 break-words text-justify text-gray-700">
                    <span className="font-semibold">Educational Details:-</span>
                    <div>Ms, BSc</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex w-80 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
                  <h2 className="mb-4 text-center text-xl font-semibold text-orange-500">
                    Special Director
                  </h2>

                  <img
                    src={SharadMeshram}
                    alt="SharadMeshram"
                    className="mx-auto h-72 w-64 rounded-xl object-cover"
                    loading="lazy"
                  />

                  <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">
                    Sharad Meshram
                  </h3>

                  <div className="mt-4 flex-1 break-words text-justify text-gray-700">
                    <span className="font-semibold">Educational Details:-</span>
                    <div>M.A. (Public Administration)</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex w-80 flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
                  <h2 className="mb-4 text-center text-xl font-semibold text-orange-500">
                    Executive Director
                  </h2>

                  <img
                    src={AshishJha}
                    alt="AshishJha"
                    className="mx-auto h-72 w-64 rounded-xl object-cover"
                    loading="lazy"
                  />

                  <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">
                    Ashish Jha
                  </h3>

                  <div className="mt-4 flex-1 break-words text-justify text-gray-700">
                    <span className="font-semibold">Educational Details:-</span>
                    <div>B.A.(Eco Hons)</div>
                    <div>M.A. (Economics)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Information */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm text-center">
            <h2 className="mb-4 text-2xl font-semibold text-orange-400">
              Key Information
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">CIN Number:</span>{' '}
                U91990DL2021NPL390522
              </p>

              <p>
                <span className="font-semibold">Incorporation Date:</span>{' '}
                December 26, 2021
              </p>

              <p>
                <span className="font-semibold">Status:</span> Active
              </p>

              <p>
                <span className="font-semibold">Category:</span> Export Consultants
              </p>
            </div>
          </div>



          {/* Final Note */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm text-center">
            <h2 className="mb-4 text-2xl font-semibold text-orange-400">
              Additional Information
            </h2>

            <p className="text-gray-700 leading-8">
              Based on the latest available records, the association has remained
              active in conducting its meetings and supporting manufacturers and
              exporters in the region. This entity is distinct from other older
              biscuit manufacturing associations in India.
            </p>
          </div>

          <div className="mt-10">
            <div className="min-h-screen p-4 md:p-8 flex justify-center items-start">
              <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                {/* Header */}
                <div className="border-b border-slate-200 px-4 md:px-8 py-5 bg-gradient-to-r from-sky-50 to-white">
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Basic Information About The Association
                  </h1>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {companyInfo.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b border-slate-200 hover:bg-slate-50 transition"
                        >
                          <td className="w-1/3 px-6 py-4 font-semibold text-slate-700 bg-slate-50 border-r border-slate-200">
                            {item.label}
                          </td>
                          <td className="px-6 py-4 text-slate-600 break-words">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden p-4 space-y-4">
                  {companyInfo.map((item, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl p-4 shadow-sm bg-white"
                    >
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        {item.label}
                      </h3>
                      <p className="text-slate-800 break-words text-sm leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-8 flex justify-center items-start">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className="border-b border-slate-200 px-4 md:px-8 py-5 bg-gradient-to-r from-sky-50 to-white">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Annual Compliance Status
                </h1>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto p-4 md:p-6">
                <table className="w-full border-collapse rounded-xl overflow-hidden">
                  <tbody>
                    {complianceData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition"
                      >
                        <td className="w-2/3 px-5 py-4 text-slate-700 border-r border-slate-200">
                          {item.label}
                        </td>
                        <td className="px-5 py-4 text-slate-900 font-medium text-right">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>


            </div>
          </div>
          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-4">
            {complianceData.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl p-4 shadow-sm bg-white"
              >
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  {item.label}
                </h3>
                <p className="text-slate-800 break-words text-sm leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;