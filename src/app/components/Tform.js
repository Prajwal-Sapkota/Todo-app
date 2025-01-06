"use client";
import { useForm } from "react-hook-form";
import { useTodos } from "../context/TodoContext";

const Tform = () => {
    const{register, handleSubmit, reset, formState: { errors}} = useForm();
    const{addTodo} = useTodos();

    const onSubmit = (data) => {
        const newTodo = {
            id: Date.now().toString(),
            title: data.title,
            date:data.date,
            status:"Not Done",
        };
        addTodo(newTodo);
        reset();
    };


    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-gray-50 rounded-lg shadow-md  mb-6 gap-3 p-4">
             <div>
                <input
                {...register("title", { required: "Title is required" })}
                type="text" placeholder="Enter todo title" className="p-2 border rounded w-full"
                />
                {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                )}
            </div>
            <div>
                <input
                {...register("date", { required: "Date and Time is required" })}
                type="datetime-local" className="p-2 border rounded w-full"
                />
                {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                )}
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-transform transform hover:scale-105">
                Add Todo
            </button>

        </form>
    )
}
export default Tform;
