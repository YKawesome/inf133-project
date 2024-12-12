import React, { useState } from "react";
import "../../App.css";

function Todo() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

  // Add a task on Enter key press
  const handleAddTask = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask.trim() }]);
      setNewTask("");
    }
  };

  // Remove a task when the row is clicked
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center max-w-lg pb-3">
            <h1 className="text-5xl font-bold">Task List</h1>
          </div>
          <div className="overflow-x-auto">
            <table className="table text-xl">
              <thead className="text-xl bg-neutral text-neutral-content">
                <tr>
                  <th>#</th>
                  <th>Task</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr
                    key={index}
                    className="hover incomplete"
                    onClick={() => handleRemoveTask(index)}
                  >
                    <th>{index + 1}</th>
                    <td>{task.text}</td>
                  </tr>
                ))}
                <tr>
                  <th>{tasks.length + 1}</th> {/* Display the next task number */}
                  <td>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input w-full text-xl borderlessinput nopad"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      onKeyDown={handleAddTask}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;