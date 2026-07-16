import Footer from "../Footer/Footer";

const Contact = () => {

    return (

        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white mt-12">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
                {/* Top information */}
                {/* <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6 max-[650px]:mt-15"> */}

                <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    All India Biscuits And Confectionary Manufacturers &amp; Exporters Association
                </h2>

                {/* </div> */}

                {/* Phone (left) and Email (right) */}
                <div className="mt-6 flex w-full flex-col gap-4 sm:flex-row">
                    <a
                        href="tel:01141500409"
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition hover:bg-orange-400 hover:ring-orange-400"
                    >
                        <span className="font-semibold text-slate-900">Telephone:</span>
                        <span className="text-slate-700">011-41500409</span>
                    </a>
                    <a
                        href="mailto:aibcmea@gmail.com"
                        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition hover:bg-orange-400 hover:ring-orange-400"
                    >
                        <span className="font-semibold text-slate-900">Mail:</span>
                        <span className="text-slate-700">aibcmea@gmail.com</span>
                    </a>
                </div>

                {/* Big map section */}
                <div className="mt-6 flex-1">
                    <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 min-[1200px]:h-[80vh] max-[1199px]:h-[80vh]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.875657018186!2d77.08435145000001!3d28.633488550000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0497d3d140e3%3A0x28cb88a1b56062b4!2sNew%20Mahavir%20Nagar%2C%20Tilak%20Nagar%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1778902059019!5m2!1sen!2sin"
                            className="h-full w-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of the association"

                        />
                    </div>
                </div>
            </div>

            {/* Bottom contact cards */}
            <Footer />
        </div>
    );
};

export default Contact;