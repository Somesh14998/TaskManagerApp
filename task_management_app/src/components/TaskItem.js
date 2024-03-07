// TaskItem.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, toggleComplete } from "../actions/actions";
import TaskEditForm from "./TaskEditForm";

const TaskItem = ({ task, deleteTask, toggleComplete }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      {editing ? (
        <TaskEditForm task={task} setEditing={setEditing} />
      ) : (
        // <div>

        //   <p>Title: {task.title}</p>
        //   <p>Description: {task.description}</p>
        //   <p>Due Date: {task.dueDate}</p>
        //   <p>Status: {task.completed ? "Completed" : "Pending"}</p>
        //   <button onClick={() => toggleComplete(task.id)}>
        //     {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
        //   </button>
        //   <button onClick={() => deleteTask(task.id)}>Delete</button>
        //   <button onClick={() => setEditing(true)}>Edit</button>
        // </div>
        <table striped bordered>
          <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default connect(null, { deleteTask, toggleComplete })(TaskItem);
