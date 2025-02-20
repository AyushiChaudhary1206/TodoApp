import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex flex-col items-center p-8 w-full min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 text-gray-900">
      {/* Todo Heading */}
      <h1 className="text-6xl font-extrabold mb-6 self-start text-purple-700 shadow-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
        Todo
      </h1>

      {/* Input and Add Task Button */}
      <div className="flex w-full max-w-lg bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/40">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-[76%] p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-black bg-white/90 placeholder-gray-600"
          placeholder="Enter task..."
        />
        <button
          onClick={handleAddTask}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-3 ml-2"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="mt-6 w-full max-w-lg space-y-4">
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </div>

      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};

export default AddTaskComponent;
