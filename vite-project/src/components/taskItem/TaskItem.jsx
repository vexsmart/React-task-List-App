import React from "react";

import Card from "../UI/Card";
import "./TaskItem.css"

const TaskItem = (props) => {


  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <Card>
      <li onClick={deleteHandler} id={props.id} className="task-item">
        <p>{props.text}</p>
      </li>
    </Card>
  );
};

export default TaskItem;
