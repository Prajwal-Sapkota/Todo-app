"use client";
import { useForm } from "react-hook-form";
import { useTodos } from "../context/TodoContext";
import CalendarView from "./calendar";

const Tform = () => {
    const{register, handleSubmit, reset, formState: { errors}} = useForm();
    const{addTodo} = useTodos();
    const { todos } = useTodos();

    const onSubmit = (data) => {
        const newTodo = {
            id: Date.now().toString(),
            title: data.title,
            date:data.date,
            status:"Not Done",
            priority:data.priority,
        };
        addTodo(newTodo);
        reset();
    };


    return(
        <div className="flex flex-col bg-gray-50 rounded-lg shadow-md mb-6 gap-6 p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <input
                {...register("title", { required: "Title is required" })}
                type="text" placeholder="Enter todo title" className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500"
                />
                {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <input
                {...register("date", { required: "Date and Time is required" })}
                type="datetime-local" className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-500"
                />
                {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <select
                    {...register("priority", { required: "Priority is required" })}
                    className="p-3 border rounded bg-gray-50 focus:ring-2 focus:ring-blue-500"
                    >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                {errors.priority && (
                <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>
                )}
            </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform transform hover:scale-105">
                    Add Todo
                </button>
            

        </form>
        <div className="mt-6">
            <CalendarView todos={todos} />
        </div>
        </div>
    )
}
export default Tform;
