import { Link } from "react-router-dom";
import { Upload } from "lucide-react";

export default function EmptyState() {

    return (

        <div className="
            flex
            flex-col
            items-center
            justify-center
            rounded-3xl
            border
            border-gray-200
            bg-white
            px-6
            py-20
            text-center
            shadow-sm
        ">



            <div className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-green-50
                text-5xl
            ">
                🐄
            </div>


            <p className="
                mt-6
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-green-700
            ">
                CattleEye
            </p>


            <h2 className="
                mt-2
                text-2xl
                font-extrabold
                text-gray-900
                sm:text-3xl
            ">

                No Predictions Yet
            </h2>


            <p className="
                mt-3
                max-w-md
                text-sm
                leading-6
                text-gray-500
            ">
                Your cattle breed predictions will appear here
                after you analyze your first image.
            </p>


            <Link
                to="/" className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-green-700
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-green-800
                    hover:shadow-md
                "
            >

                <Upload size={17} />

                Analyze Cattle

            </Link>

        </div>

    );
}