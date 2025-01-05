"use client";
import { useEffect,useState } from "react";
import { useTodos } from "../context/TodoContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const { todos } = useTodos();
  const [notifiedTodos, setNotifiedTodos] = useState([]);

  useEffect(() => {

    // toast("Test Notification")
    const checkNotifications = () => {

        // console.log("Checking notifications...");
        const now = new Date().getTime(); // Current timestamp
        console.log("Current Time (now):", new Date(now));

        todos.forEach((todo) => {
            const todoTime = new Date(todo.date).getTime(); // Todo timestamp
            const oneHourBefore = todoTime - 60 * 60 * 1000; // 1 hour before todo time

            console.log(`Todo Time: ${new Date(todoTime)}`);
            console.log(`1 Hour Before Todo: ${new Date(oneHourBefore)}`);
            console.log(`Todo Time: ${todoTime.toLocaleString()}`);

            // if (now >= oneHourBefore && now < todoTime) {
            //     console.log(`Sending notification for task: ${todo.title}`);

            if (now >= oneHourBefore && now < todoTime) {
                console.log(`Sending notification for task: ${todo.title}`);
                // Show notification if it's within the 1-hour window
                toast(`Reminder: Your task "${todo.title}" is due in 1 hour!`);
                setNotifiedTodos((prev) => [...prev, todo.id]);

                    
            }
            
        });
        };

        const interval = setInterval(checkNotifications, 60 * 1000); 
        return () => clearInterval(interval); 
    }, [todos,notifiedTodos]);

    return null; 
};

export default Notification;