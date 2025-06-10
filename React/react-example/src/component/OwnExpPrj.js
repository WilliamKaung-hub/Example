"use client";

import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!taskInput.trim()) return;

    if (editIndex !== null) {
      // Update task
      const updatedTasks = tasks.map((task, i) =>
        i === editIndex ? taskInput : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTasks([...tasks, taskInput]);
    }

    setTaskInput("");
  };

  const handleEdit = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (index === editIndex) {
      setEditIndex(null);
      setTaskInput("");
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setTaskInput("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ToDo App</h1>

      <div style={styles.inputGroup}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task..."
          style={styles.input}
        />
        <button onClick={handleAddOrUpdate} style={styles.button}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
        {editIndex !== null && (
          <button onClick={handleCancelEdit} style={styles.cancelButton}>
            Cancel
          </button>
        )}
      </div>

      <ul style={styles.taskList}>
        {tasks.length === 0 ? (
          <li>No tasks yet</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} style={styles.taskItem}>
              <span>{task}</span>
              <div>
                <button onClick={() => handleEdit(index)} style={styles.editButton}>
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  cancelButton: {
    padding: "8px 12px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },
  editButton: {
    marginRight: "10px",
    padding: "4px 8px",
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "3px",
  },
  deleteButton: {
    padding: "4px 8px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
  },
};
