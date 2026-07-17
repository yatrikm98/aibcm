import { useState } from "react";

const COLLAPSED_HEIGHT = 625;

const IngredientColumn = ({ title, items, expanded }) => (
    <div>
        <h4 className="text-sm font-semibold text-gray-900">
            {title}
        </h4>

        <div
            className="overflow-hidden"
            style={{ maxHeight: expanded ? "none" : `${COLLAPSED_HEIGHT}px` }}
        >
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

const IngredientCard = ({ title, titleColor, columns }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="rounded-xl border border-gray-200 p-4">
            <h3 className={`text-lg font-semibold ${titleColor}`}>
                {title}
            </h3>

            <div className="mt-4 grid grid-cols-2 items-start gap-4">
                {columns.map((column, index) => (
                    <IngredientColumn
                        key={index}
                        title={column.title}
                        items={column.items}
                        expanded={expanded}
                    />
                ))}
            </div>

            <div className="mt-3 text-center">
                <button
                    type="button"
                    onClick={() => setExpanded((prev) => !prev)}
                    className="text-sm font-semibold text-blue-600 hover:underline"
                >
                    {expanded ? "Less" : "More"}
                </button>
            </div>
        </div>
    );
};

const biscuitIndianStandard = [
    "Whole wheat Meal",
    "Wheat Atta",
    "Semolina",
    "Wheat Bran ",
    "Wheat and Maize germ",
    "Barley Powder",
    "Oat , besan , rice, malt, soya bean, Tapioca and Potato Flour",
    "Peanuts",
    "Peanut Butter",
    "Edible groundnut Flour",
    "Isolates and Concentrates",
    "Sweet Potato",
    "Arrowroot Starch",
    "Maize starch",
    "Rice Starch",
    "Casein",
    "Milk powder and its products",
    "Cheese",
    "Whey Soids",
    "Sugars",
    "Liquid Glucose",
    "Dextrose Monohydrate",
    "Jaggery and Khandsari",
    "lactose",
    "Malt extract",
    "Invert and golden syrup",
    "Dessicated Coconut",
    "Dry Fruits and edible Fruits",
    "Pectin and Fruit Jams",
    "Ginger, Chilli Powder, Black pepper, saffron , Cardamom, Cumin",
    "Proteolytic and amylases, sodium bi sulphate and sodium metabisulphate.",
    "Flour improvers",
    "Baking powder, ammonium bicarbonate, sodium bi carbonate, ammonium carbonate.",
    "Protein and calcium products.",
    "Potassium Iodide",
    "L-cysteine",
    "Sodium sulphite and metabisulphite",
    "Acetic or lactic acid ",
];

const biscuitFssai = [
    "Millets/Pulses.",
    "Fats and oils",
    "Fat emulsions",
    "Baking Powder",
    "Sugar and sugar Products",
    "Edible Salt",
    "Salt Substitues",
    "Dairy Products",
    "Analogues",
    "Nitritive and Non-nutritive Sweeteners",
    "Honey",
    "Invert Sugar",
    "Jaggery",
    "Dextrose",
    "Edible Molasses",
    "Glucose Syrup",
    "Cocoa and Chocolates",
    "Tea and Coffee",
    "Chicory",
    "Cocounts and its Products",
    "Eggs and eggs products",
    "Gluten",
    "Nut and its products",
    "Malt and its Products",
    "Milk and its Products",
    "Oilseeds and its products",
    "Starches and Spices",
    "Flours and Condiments",
    "Herbs and there extracts",
    "Vinegar",
    "Edible seeds",
    "Protein",
    "Yeast and its products",
    "Enzymes and Yeast",
];

const confectioneryIndianStandard = [
    "Cane Jaggery",
    "Palm Jaggery",
    "Invert Sugar",
    "sorbitol",
    "Lactose",
    "dextrose",
    "Malt and Malt Extracts",
    "Enzymes",
    "Acidulants",
    "Food Grade such as malic ,citric , tartaric and lactic acid",
    "Jellifying agents such as gelatin, agar ,sodium sodium carboxymethyl cellulose.",
    "Lubricats such as calcium, magnesium.",
    "Sodium salts of stearic acis,talc,icing sugar .",
    "Bee Wax,Carnuba wax",
    "Anti Oxidants",
    "Colouring matter",
    "Flavours",
    "Milk and milk products",
    "Food grade mineral oil",
    "Glycerine",
    "Cocoa Butter",
    "Sodium alignate",
    "Acacia Gum",
    "Toffees",
];

const confectioneryFssai = [
    "Sugar,jaggery.",
    "Milka nd Milk Products.",
    "Edible Molasses.",
    "Edible Starches",
    "Edible Oils and Fats",
    "Edible Common Salts",
    "Fruit Products ,Nut Products",
    "Tea and coffee Extracrs",
    "Chocolate, Cocoa",
    "Vitamins and Minerals",
    "Shellac, bee wax",
    "Dessicated Coconut",
    "Spices and Condiments",
    "Candied Peels",
    "Stabalizing agents",
    "Emulsifying Agents",
    "Foodgrains and seeds",
    "Baking Powder",
    "Gulkand",
    "Gulabanafsha , Mulathi",
    "Puffed Rice",
    "China grass",
    "Thymol",
    "Protein islolates",
    "Arabic and Edible Gum",
    "Isomaltulose at 50%.",
    "Eucalyptus oil",
    "Camphor, Peeper mint oil",
    "Menthol Oil crystals",
];

const Ingredients = () => {

    return (
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 px-8">
            <h2 className="text-2xl font-semibold text-gray-900 max-[850px]:text-center text-center">
                Ingredients
            </h2>

            <div className="mt-6 grid items-start gap-6 sm:grid-cols-2">
                <IngredientCard
                    title="Biscuit Ingredients"
                    titleColor="text-blue-600"
                    columns={[
                        { title: "As per Indian Standard", items: biscuitIndianStandard },
                        { title: "As per FASSAI", items: biscuitFssai },
                    ]}
                />

                <IngredientCard
                    title="Confectionery Ingredients"
                    titleColor="text-pink-600"
                    columns={[
                        { title: "As per Indian Standard", items: confectioneryIndianStandard },
                        { title: "As per FASSAI", items: confectioneryFssai },
                    ]}
                />
            </div>
        </div>
    )
}

export default Ingredients
