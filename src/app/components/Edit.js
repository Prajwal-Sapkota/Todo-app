"use client";
import { useState } from "react";

const EditTodo =({ todo, onSave, onCancel}) => {
    const[editValue, setEditValue] = useState(todo.title);
    const[editDate, setEditDate] = useState(todo.date);



    const handleSave = () => {
        if (editValue.trim() === "") return;
        onSave({ ...todo, title: editValue, date: editDate});
    };
    return(
        <div className="flex flex-col gap-2">
           <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} className="p-2 border rounded" /> 
           <input type="datetime-local" value={editDate} onChange={(e) => setEditDate(e.target.value)} className="p-2 border rounded" />
            <div className="flex gap-2">
                <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                Save
                </button>
                <button
                onClick={onCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                Cancel
                </button>
            </div>
        </div>
    );
};
export default EditTodo;