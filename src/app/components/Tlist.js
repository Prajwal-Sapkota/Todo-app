"use client";
import { useState } from "react";
import Modal from "./Modal";
import { useTodos } from "../context/TodoContext";
import EditTodo from "./Edit";


const Tlist = () => {
    const{todos, deleteTodo, updateTodo} = useTodos();
    const[modalOpen, setModelOpen]= useState(false);
    const[selectedTodo, setSelectedTodo]= useState(null);
    const[editTodo, setEditTodo]= useState(null);
    const[searchQuery,setSearchQuery]= useState("");

    const handleDelete = (id) => {
        setModelOpen(true);
        setSelectedTodo(id);
    };
    const confirmDelete = () => {
        deleteTodo(selectedTodo);
        setModelOpen(false);
        setSelectedTodo(null);
    } ;
    const handleStatusChange = (todo, status) => {
        updateTodo({...todo, status});
    };
    
    const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date));

    const priorityColor = {
        High: "bg-red-200 dark:bg-red-700",
        Medium: "bg-yellow-200 dark:bg-yellow-700",
        Low: "bg-green-200 dark:bg-green-700",
    };
    const filteredTodos = sortedTodos.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-4">Your Todo List</h1>
            <input type="text" placeholder="Search todo..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 border-2 border-blue-400 rounded-full w-full mb-4 shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />

            {filteredTodos.length > 0 ? (
                filteredTodos.map((todo) => (
                <div
                    key={todo.id}
                    className={`flex justify-between items-center shadow-md p-4 mb-4 rounded-lg border ${
                        priorityColor[todo.priority]
                    }`}
                >

                    <div>
                        {editTodo === todo.id ? (
                            <EditTodo
                            todo={todo}
                            onSave={(updatedTodo) => {
                                updateTodo(updatedTodo);
                                setEditTodo(null);
                            }}
                            onCancel={() => setEditTodo(null)}
                            />
                        ) : (
                            <>
                            <h3 className="font-bold text-lg text-gray-700 dark:text-gray-300">{todo.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {new Date(todo.date).toLocaleString()}
                            </p>
                            </>
                        )}
                        <select
                        value={todo.status}
                        onChange={(e) => handleStatusChange(todo, e.target.value)}
                        className={`mt-2 p-2 border rounded bg-gray-50 dark:bg-gray-700 focus:ring-2 ${
                            todo.status === "Not Done"
                                ? "text-red-500 bg-red-100 dark:text-red-500 dark:bg-red-600"
                                : todo.status === "In Progress"
                                ? "text-yellow-500 bg-yellow-100 dark:text-yellow-500 dark:bg-yellow-600"
                                : "text-green-500 bg-green-100 dark:text-green-500 dark:bg-green-600"
                          }`}                    >
                        <option value="Not Done">Not Done</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                    </select>
                    </div>
                    
                    <div className="flex gap-2">
                        {editTodo !== todo.id && (
                            <button
                            onClick={() => setEditTodo(todo.id)}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition dark:bg-blue-700 dark:hover:bg-blue-600"
                            >
                            Edit
                            </button>
                        )}
                        <button
                            onClick={() => handleDelete(todo.id)}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition dark:hover:bg-red-600"
                        >
                            Delete
                        </button>

                    </div>
                    
                </div>
                ))
            ) : (
                <p className="text-center text-gray-600 dark:text-gray-400">No tasks available. Add some!</p>
            )}
            <Modal 
            isOpen={modalOpen}
            onClosse={() => setModelOpen(false)}
            onConfirm={confirmDelete}
            />

        </div>
    );
};
export default Tlist;