export default function Pagination({
    currentPage,
    totalPages,
    setCurrentPage
}) {

    if (totalPages <= 1) {
        return null;
    }


    function previousPage() {

        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }

    }


    function nextPage() {

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }

    }


    return (

        <div className="flex items-center justify-center gap-3">

            <button
                onClick={previousPage}
                disabled={currentPage === 1}
                className="
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-700
                    transition
                    hover:border-green-300
                    hover:text-green-700
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                ← Previous
            </button>


            <div className="rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white">
                {currentPage} / {totalPages}
            </div>


            <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-gray-700
                    transition
                    hover:border-green-300
                    hover:text-green-700
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                "
            >
                Next →
            </button>

        </div>

    );
}