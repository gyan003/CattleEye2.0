

import {
    Activity,
    BarChart3,
    CalendarDays,
    Trophy
} from "lucide-react";


export default function StatsCards({ history }) {

    const total = history.length;


    const average = total

        ? history.reduce(
            (sum, item) =>
                sum + (Number(item.confidence) || 0),
            0
        ) / total

        : 0;


    const breeds = {};

    history.forEach((item) => {

        const breed = item.breed || "Unknown";

        breeds[breed] =
            (breeds[breed] || 0) + 1;

    });


    const topBreed = Object.keys(breeds).length

        ? Object.keys(breeds).reduce(
            (a, b) =>
                breeds[a] > breeds[b]
                    ? a
                    : b
        )

        : "-";


    /*
     * Today's predictions
     */

    const today = new Date();

    const todayCount = history.filter((item) => {

        if (!item.createdAt) {
            return false;
        }

        const date = new Date(item.createdAt);

        return (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
        );

    }).length;


    return (

        <div className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
        ">

            <StatCard
                title="Total Predictions"
                value={total}
                icon={<Activity size={20} />}
                description="All time"
            />


            <StatCard
                title="Average Confidence"
                value={`${average.toFixed(1)}%`}
                icon={<BarChart3 size={20} />}
                description="Across predictions"
            />


            <StatCard
                title="Top Breed"
                value={topBreed}
                icon={<Trophy size={20} />}
                description={
                    topBreed === "-"
                        ? "No data yet"
                        : `${breeds[topBreed]} prediction${
                            breeds[topBreed] === 1
                                ? ""
                                : "s"
                        }`
                }
            />


            <StatCard
                title="Today"
                value={todayCount}
                icon={<CalendarDays size={20} />}
                description="Predictions today"
            />

        </div>

    );
}


function StatCard({
    title,
    value,
    icon,
    description
}) {

    return (

        <div className="
            group
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-green-200
            hover:shadow-md
        ">

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm font-medium text-gray-500">
                        {title}
                    </p>

                    <h3 className="
                        mt-2
                        truncate
                        text-2xl
                        font-extrabold
                        text-gray-900
                        sm:text-3xl
                    ">
                        {value}
                    </h3>

                </div>


                <div className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-50
                    text-green-700
                    transition
                    group-hover:bg-green-700
                    group-hover:text-white
                ">
                    {icon}
                </div>

            </div>


            <p className="mt-3 text-xs text-gray-400">
                {description}
            </p>

        </div>

    );
}