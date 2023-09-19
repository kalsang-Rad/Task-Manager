import React from "react";

function TaskDetails({ task }) {
  return (
    <div className="max-w-lg ">
      <div className="font-serif text-lg mx-8">
        <span className="font-serif">{task.title}</span> (<em>{task.date}</em>)
      </div>
    </div>
  );
}

export default TaskDetails;
