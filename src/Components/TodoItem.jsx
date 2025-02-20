
import { useState } from "react";
import { toast } from "react-toastify";
const ToDoItem = ({ task, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleComplete = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);
    if(!isCompleted){
                toast.success("Task Completed");
            }
           
          };
        
          const handleDelete = () => {
            onDelete(task.id);
            toast.success("Task Deleted")
          };

  return (
    <div className="w-full mb-2 mt-2 max-w-lg p-4 bg-white shadow-md shadow-purple-300 rounded-lg border border-gray-300 mb-4 flex flex-col items-center transition-shadow hover:shadow-lg hover:shadow-purple-400 overflow-hidden break-words">
      <span className={`text-center w-full break-words ${isCompleted ? "line-through text-gray-500" : "text-black"}`}>
        {task.text}
      </span>
      <div className="flex gap-4 mt-4 w-full justify-center">
        <button
          onClick={toggleComplete}
          className={`px-4 py-2 text-white rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 ${isCompleted ? "bg-green-500" : "bg-red-500"}`}
        >
          {isCompleted ? "Completed" : "Mark as complete"}
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-gray-500 text-white rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;

