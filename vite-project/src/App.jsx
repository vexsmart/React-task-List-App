import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/taskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Learn React",
      id: "t1",
    },
    {
      text: "Learn Redux",
      id: "t2",
    },
  ]);

  const handleTaskInput = (textData) => {
    setTasks((prevState) => {
      const updatedTasks = [...prevState];
      updatedTasks.push({ text: textData, id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteHandler = (id) => {
    setTasks((prevState) => {
      const updatedTasks = prevState.filter((task) => task.id !== id);
      return updatedTasks;
    });
  };

  return (
    <>
      <h1>Hello World</h1>
      <TaskInput onAddTask={handleTaskInput} />
      <TaskList onDelete={deleteHandler} itemData={tasks} />
    </>
  );
}

export default App;
