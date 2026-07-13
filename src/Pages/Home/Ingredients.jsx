const Ingredients = () => {

    return (
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 px-8">
            <h2 className="text-2xl font-semibold text-gray-900 max-[850px]:text-center">
                Ingredients
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {/* Biscuit Ingredients */}
                <div className="rounded-xl border border-gray-200 p-4">
                    <h3 className="text-lg font-semibold text-blue-600 ">
                        Biscuit Ingredients
                    </h3>

                    <div className="mt-4 grid gap-4 grid-cols-2">
                        {/* As per Indian Standard */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 text-center">
                                As per Indian Standard
                            </h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Wheat flour (maida)</li>
                                <li>Sugar</li>
                                <li>Edible vegetable oil / fat </li>
                                <li>Baking powder</li>
                            </ul>
                        </div>

                        {/* As per FSSR */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 text-center">
                                As per FSSR
                            </h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Permitted food additives</li>
                                <li>Approved emulsifiers</li>
                                <li>Permitted colours</li>
                                <li>Iodised salt</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Confectionery Ingredients */}
                <div className="rounded-xl border border-gray-200 p-4">
                    <h3 className="text-lg font-semibold text-pink-600">
                        Confectionery Ingredients
                    </h3>

                    <div className="mt-4 grid gap-4 grid-cols-2">
                        {/* As per Indian Standard */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                                As per Indian Standard
                            </h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Cane Jaggery</li>
                                <li>Palm Jaggery</li>
                                <li>Invert Sugar</li>
                                <li>sorbitol</li>
                                <li>Lactose</li>
                                <li>dextrose</li>
                                <li>Malt and Malt Extracts</li>
                                <li>Enzymes</li>
                                <li>Acidulants</li>
                                <li>Food Grade such as malic ,citric , tartaric and lactic acid</li>
                                <li>Jellifying agents sucha s gelatin, agar ,sodium sodium carboxymethyl cellulose.</li>
                                <li>Lubricats such as calcium, magnesium.</li>
                                <li>Sodium salts of stearic acis,talc,icing sugar .</li>
                                <li>Bee Wax,Carnuba wax</li>
                                <li>Anti Oxidants</li>
                                <li>Colouring matter</li>
                                <li>Flavouring agents</li>
                                <li>Milk and milk products</li>
                                <li>Food grade mineral oil</li>
                                <li>Glycerine</li>
                                <li>Cocoa Butter</li>
                                <li>Sodium alignate</li>
                                <li>Acacia Gum</li>
                                <li>Toffees</li>
                            </ul>
                        </div>

                        {/* As per FSSR */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                                As per FSSR
                            </h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Sugar,jaggery,Bura Sugar,honey ,Liquid Glucose.</li>
                                <li>Milka nd Milk Products.</li>
                                <li>Edible Molasses.</li>
                                <li>Malt Extracts</li>
                                <li>Edible Starches</li>
                                <li>Edible Oils and Fats</li>
                                <li>Edible Common Salts</li>
                                <li>Fruit Products ,Nut Products</li>
                                <li>Tea and coffee Extracrs</li>
                                <li>Chocolate, Cocoa</li>
                                <li>Vitamins and Minerals</li>
                                <li>Shellac, bee wax</li>
                                <li>Dessicated Coconut</li>
                                <li>Spices and Condiments</li>
                                <li>Candied Peels</li>
                                <li>Stabalizing agents</li>
                                <li>Emulsifying Agents</li>
                                <li>Foodgrains and seeds</li>
                                <li>Baking Powder</li>
                                <li>Gulkand</li>
                                <li>Gulabanafsha , Mulathi</li>
                                <li>Puffed Rice</li>
                                <li>China grass</li>
                                <li>Thymol</li>
                                <li>Protein islolates</li>
                                <li>Arabic and Edible Gum</li>
                                <li>Isomaltulose at 50%.</li>
                                <li>Eucalyptus oil</li>
                                <li>Camphor, Peeper mint oil</li>
                                <li>Menthol Oil crystals</li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ingredients
