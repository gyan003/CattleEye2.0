import { CalendarDays } from "lucide-react";

export default function FilterBar({
    selectedDate,
    setSelectedDate
}) {

    return (

        <div className="relative w-full md:w-60">

            <CalendarDays
                size={18}
                className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                "
            />


            <input
                type="date"
                value={selectedDate}
                onChange={(e) =>
                    setSelectedDate(e.target.value)
                }
                className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    py-3
                    pl-11
                    pr-4
                    text-sm
                    text-gray-700
                    outline-none
                    transition
                    hover:border-gray-300
                    focus:border-green-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-green-100
                "
            />

        </div>

    );
}