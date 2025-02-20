import { useState } from "react";
import { toast } from "react-toastify";

const ToDoItem = ({ task, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    if (!isCompleted) {
      toast.success("Task Completed");
    }
  };

  const handleDelete = () => {
    onDelete(task.id);
    toast.success("Task Deleted");
  };

  return (
    <div className="w-full mb-3 mt-2 max-w-lg p-5 bg-gradient-to-br from-gray-100 to-purple-100 shadow-lg shadow-purple-300 rounded-xl border border-gray-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500 transform hover:scale-[1.05] overflow-hidden break-words">
      {/* Task Text */}
      <span
        className={`text-center w-full break-words text-lg font-semibold transition-all duration-300 ${
          isCompleted ? "line-through text-gray-500" : "text-gray-900"
        }`}
      >
        {task.text}
      </span>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4 w-full justify-center">
        {/* Mark as Complete Button */}
        <button
          onClick={toggleComplete}
          className={`px-6 py-2 text-white font-medium rounded-lg shadow-md hover:shadow-2xl focus:outline-none focus:ring-2 transition-all duration-300 transform hover:scale-110 ${
            isCompleted
              ? "bg-gradient-to-r from-green-400 to-green-600 focus:ring-green-300 hover:brightness-110"
              : "bg-gradient-to-r from-blue-400 to-blue-600 focus:ring-blue-300 hover:brightness-110"
          }`}
        >
          {isCompleted ? "Completed" : "Mark as Complete"}
        </button>

        {/* Delete Button (Red) */}
        <button
          onClick={handleDelete}
          className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 transform hover:scale-110 hover:brightness-110"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
