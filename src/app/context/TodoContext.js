"use client";
import { createContext ,useState,useContext, useEffect } from "react";

const TodoContext= createContext();

export const TodoProvider =({children}) =>{

    const[todos, setTodos]= useState([]);

    useEffect(() => {
        try{
            const storedTodos = localStorage.getItem("todos");
            if(storedTodos){
                setTodos(JSON.parse(storedTodos));
            }
        }catch(error){
            console.error("Error parsing todos from localStorage:", error);
            setTodos([]);
        }
       
    },[]);

    useEffect (() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    },[todos]);


    const addTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    };

    const updateTodo = (updatedTodo) => {
        setTodos((prevTodos) => prevTodos.map((todo)=>(todo.id === updatedTodo.id ?  updatedTodo : todo)));
    };

    const deleteTodo = (id)=> {
        setTodos((prevTodos) => prevTodos.filter((todo)=> todo.id !== id));
    };

    return(
        <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    );

};

export const useTodos = () => useContext(TodoContext);

