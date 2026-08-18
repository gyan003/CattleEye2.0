import { Trash2, Clock3, CheckCircle2 } from "lucide-react";
import ProgressBar from "./ProgressBar";

export default function HistoryCard({ item, onDelete }) {

    const confidence = Number(item.confidence) || 0;

    const image = item.imageUrl;


    function formatDate(date) {

        if (!date) {
            return "Unknown date";
        }

        return new Date(date).toLocaleString(
            undefined,
            {
                dateStyle: "medium",
                timeStyle: "short",
            }
        );
    }


    return (

        <article className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-green-200
            hover:shadow-lg
        ">

            <div className="flex flex-col gap-6 p-5 sm:p-6 lg:flex-row">


                {/* =========================
                    IMAGE
                ========================== */}

                <div className="
                    relative
                    h-52
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-2xl
                    bg-gray-100
                    sm:h-60
                    lg:h-36
                    lg:w-44
                ">

                    {image ? (

                        <img
                            src={image}
                            alt={`${item.breed || "Cattle"} prediction`}
                            className="
                                h-full
                                w-full
                                object-cover
                                transition
                                duration-500
                                group-hover:scale-105
                            "
                        />

                    ) : (

                        <div className="flex h-full items-center justify-center">

                            <span className="text-5xl">
                                🐄
                            </span>

                        </div>

                    )}


                    {/* Image badge */}

                    <div className="
                        absolute
                        left-3
                        top-3
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        bg-white/90
                        px-2.5
                        py-1
                        text-xs
                        font-medium
                        text-green-700
                        shadow-sm
                        backdrop-blur-sm
                    ">

                        <CheckCircle2 size={13} />

                        Analyzed

                    </div>

                </div>


                {/* =========================
                    CONTENT
                ========================== */}

                <div className="min-w-0 flex-1">


                    {/* Header */}

                    <div className="flex items-start justify-between gap-4">

                        <div className="min-w-0">

                            <p className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                text-green-700
                            ">
                                Predicted Breed
                            </p>


                            <h2 className="
                                mt-1
                                truncate
                                text-2xl
                                font-extrabold
                                text-gray-900
                                sm:text-3xl
                            ">
                                {item.breed || "Unknown"}
                            </h2>


                            <div className="
                                mt-2
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-gray-500
                            ">

                                <Clock3 size={15} />

                                {formatDate(item.createdAt)}

                            </div>

                        </div>


                        {/* Confidence */}

                        <div className="
                            shrink-0
                            rounded-2xl
                            bg-green-50
                            px-3
                            py-2
                            text-right
                        ">

                            <p className="text-xs font-medium text-gray-500">
                                Confidence
                            </p>

                            <p className="mt-0.5 text-xl font-extrabold text-green-700">
                                {confidence.toFixed(1)}%
                            </p>

                        </div>

                    </div>


                    {/* Progress */}

                    <div className="mt-5">

                        <ProgressBar
                            value={confidence}
                        />

                    </div>


                    {/* Bottom */}

                    <div className="
                        mt-5
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-gray-100
                        pt-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    ">

                        <p className="text-xs text-gray-400">
                            AI breed prediction
                        </p>


                        {onDelete && (

                            <button
                                type="button"
                                onClick={() => onDelete(item._id)}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-gray-200
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-gray-500
                                    transition
                                    hover:border-red-200
                                    hover:bg-red-50
                                    hover:text-red-600
                                "
                            >

                                <Trash2 size={16} />

                                Delete

                            </button>

                        )}

                    </div>

                </div>

            </div>

        </article>

    );
}