import React from "react";

import TaskItem from "../taskItem/TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  // a prop will receive the task data and map it
  // todo
  const ulContent = props.itemData.map((item) => (
    <TaskItem
      onDelete={props.onDelete}
      key={item.id}
      id={item.id}
      text={item.text}
    />
  ));

  return <ul className="task-list">{ulContent}</ul>;
};

export default TaskList;
