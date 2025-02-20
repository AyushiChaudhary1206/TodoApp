import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { v4 as uuidv4 } from "uuid";
import ToDoItem from "./TodoItem";

const AddTaskComponent = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleAddTask = () => {
    if (!task.trim()) {
      toast.error("Task cannot be empty!");
      return;
    }

    const newTask = { id: uuidv4(), text: task };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    toast.success("Task added successfully!");
    setTask("");
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex flex-col items-center p-8 w-full min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-extrabold mb-6 self-start shadow-lg drop-shadow-md text-purple-700">Todo</h1>
      <div className="flex w-full max-w-lg bg-white p-4 rounded-lg shadow-lg border border-gray-300">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-[76%] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          placeholder="Enter task..."
        />
        <button
          onClick={handleAddTask}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm text-center text-white px-5 py-3 ml-2 rounded-lg "
        >
          Add Task
        </button>
      </div>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} onDelete={handleDeleteTask} />
      ))}
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default AddTaskComponent;

