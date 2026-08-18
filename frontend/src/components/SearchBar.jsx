import { Search, X } from "lucide-react";

export default function SearchBar({
    searchTerm,
    setSearchTerm
}) {

    return (

        <div className="relative w-full">

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                "
            />


            <input
                type="text"
                placeholder="Search by breed..."
                value={searchTerm}
                onChange={(e) =>
                    setSearchTerm(e.target.value)
                }
                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    py-3
                    pl-11
                    pr-11
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    hover:border-gray-300
                    focus:border-green-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-green-100
                "
            />


            {searchTerm && (

                <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="
                        absolute
                        right-3
                        top-1/2
                        flex
                        h-7
                        w-7
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        text-gray-400
                        transition
                        hover:bg-gray-200
                        hover:text-gray-700
                    "
                >

                    <X size={15} />

                </button>

            )}

        </div>

    );
}