const Footer = () => {

  return (
    
    <footer className="max-w-full z-50 w-full border-t bg-orange-400 shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">

          <div className="text-center lg:text-left">
            <h2 className="text-lg font-bold text-black">
              AIBCM Association
            </h2>

            <p className="mt-1 max-w-xl text-sm leading-relaxed text-black">
              All India Biscuits And Confectionery Manufacturers &
              Exporters Association
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:aibcmea@gmail.com"
              className="rounded-xl border border-orange-300 bg-orange-50 px-5 py-3 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-orange-100 hover:shadow-md"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                Mail
              </div>

              <div className="mt-1 text-sm font-medium text-gray-800">
                aibcmea@gmail.com
              </div>
            </a>

            <a
              href="tel:01141500409"
              className="rounded-xl bg-orange-50 px-5 py-3 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-orange-100 hover:shadow-md"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                Telephone
              </div>

              <div className="mt-1 text-sm font-medium text-gray-800">
                011-41500409
              </div>
            </a>

          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">

          <div className="text-center text-sm leading-relaxed text-gray-600">
            M 17, Ground Floor, New Mahavir Nagar, Near Janakpuri East Metro
            Station, New Delhi - 110018.
          </div>

          <div className="mt-3 text-center text-xs leading-relaxed text-gray-500">
            © 2026 AIBCM. All Rights Reserved | Privacy Policy |
            All India Biscuits And Confectionery Manufacturers &
            Exporters Association
          </div>

        </div>
      </div>
    </footer>
  )

}

export default Footer