const Ingredients = () => {

    return (
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 px-8">
            <h2 className="text-2xl font-semibold text-gray-900 max-[850px]:text-center text-center">
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
                            <h4 className="text-sm font-semibold text-gray-900 ">
                                As per Indian Standard
                            </h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Whole wheat Meal</li>
                                <li>Wheat Atta</li>
                                <li>Semolina</li>
                                <li>Wheat Bran </li>
                                <li>Wheat and Maize germ</li>
                                <li>Barley Powder</li>
                                <li>Oat , besan , rice, malt, soya bean, Tapioca and Potato Flour</li>
                                <li>Peanuts</li>
                                <li>Peanut Butter</li>
                                <li>Edible groundnut Flour</li>
                                <li>Isolates and Concentrates</li>
                                <li>Sweet Potato</li>
                                <li>Arrowroot Starch</li>
                                <li>Maize starch</li>
                                <li>Rice Starch</li>
                                <li>Casein</li>
                                <li>Milk powder and its products</li>
                                <li>Cheese</li>
                                <li>Whey Soids</li>
                                <li>Sugars</li>
                                <li>Liquid Glucose</li>
                                <li>Dextrose Monohydrate</li>
                                <li>Jaggery and Khandsari</li>
                                <li>lactose</li>
                                <li>Malt extract</li>
                                <li>Invert and golden syrup</li>
                                <li>Dessicated Coconut</li>
                                <li>Dry Fruits and edible Fruits</li>
                                <li>Pectin and Fruit Jams</li>
                                <li>Ginger, Chilli Powder, Black pepper, saffron , Cardamom, Cumin</li>
                                <li>Proteolytic and amylases, sodium bi sulphate and sodium metabisulphate.</li>
                                <li>Flour improvers</li>
                                <li>Baking powder, ammonium bicarbonate, sodium bi carbonate, ammonium carbonate.</li>
                                <li>Protein and calcium products.</li>
                                <li>Potassium Iodide</li>
                                <li>L-cysteine</li>
                                <li>Sodium sulphite and metabisulphite</li>
                                <li>Acetic or lactic acid </li>
                            </ul>
                        </div>

                        {/* As per FSSR */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 ">
                                As per FASSAI
                            </h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Millets/Pulses.</li>
                                <li>Fats and oils</li>
                                <li>Fat emulsions</li>
                                <li>Baking Powder</li>
                                <li>Sugar and sugar Products</li>
                                <li>Edible Salt</li>
                                <li>Salt Substitues</li>
                                <li>Dairy Products</li>
                                <li>Analogues</li>
                                <li>Nitritive and Non-nutritive Sweeteners</li>
                                <li>Honey</li>
                                <li>Invert Sugar</li>
                                <li>Jaggery</li>
                                <li>Dextrose</li>
                                <li>Edible Molasses</li>
                                <li>Glucose Syrup</li>
                                <li>Cocoa and Chocolates</li>
                                <li>Tea and Coffee</li>
                                <li>Chicory</li>
                                <li>Cocounts and its Products</li>
                                <li>Eggs and eggs products</li>
                                <li>Gluten</li>
                                <li>Nut and its products</li>
                                <li>Malt and its Products</li>
                                <li>Milk and its Products</li>
                                <li>Oilseeds and its products</li>
                                <li>Starches and Spices</li>
                                <li>Flours and Condiments</li>
                                <li>Herbs and there extracts</li>
                                <li>Vinegar</li>
                                <li>Edible seeds</li>
                                <li>Protein</li>
                                <li>Yeast and its products</li>
                                <li>Enzymes and Yeast</li>
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
                                As per FASSAI
                            </h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                                <li>Sugar,jaggery.</li>
                                <li>Milka nd Milk Products.</li>
                                <li>Edible Molasses.</li>
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
