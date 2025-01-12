"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import CSS for the calendar
import { useTodos } from "../context/TodoContext";

const CalendarView = ({ todos }) => {
    
    const formatDate = (dateString) => {
        return new Date(dateString).toISOString().split("T")[0];
    };

   
    const todoDates = new Set(
        todos.map((todo) => formatDate(todo.date))
    );

    
    const isPastDate = (date) => {
        const today = new Date();
        const formattedToday = today.toISOString().split("T")[0];
        const formattedDate = date.toISOString().split("T")[0];
        return formattedDate < formattedToday;
    };

   
    const tileContent = ({ date, view }) => {
        
        if (view === "month" && !isPastDate(date) && todoDates.has(formatDate(date))) {
            return (
                <div className="text-xs text-center text-white bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center mx-auto">
                    <span className="font-bold">•</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="calendar-container dark:bg-gray-800 dark:text-white">
            <Calendar
                tileContent={tileContent}
                className="react-calendar dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-500"
            />
        </div>
    );
};

export default CalendarView;