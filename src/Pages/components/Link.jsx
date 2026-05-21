import { NavLink } from "react-router";

const LinkComponent = ({data}) => {

    return (
        <div>
            <div className="mt-8 flex justify-center">
                <NavLink
                    to={data.link}
                    className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md transition hover:bg-blue-700"
                >
                    View {data.ImageButtonTitle} Product Images
                </NavLink>
            </div>
        </div>
    )
}

export default LinkComponent