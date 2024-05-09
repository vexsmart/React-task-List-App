import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./taskInput.css";

const TaskInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setisValid] = useState(true);

  const inputValueHandler = (event) => {
    if(inputValue.trim().length > 0){
      setisValid(true);
    }
    
    setInputValue(event.target.value);
    
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    props.onAddTask(inputValue);
    setInputValue("");
  };


  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control`}>
          <label>{!isValid ? "please enter with a task!" : "set task"}</label>
          <input
            type="text"
            required
            onChange={inputValueHandler}
            value={inputValue}
            placeholder="Enter a task"
          />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default TaskInput;
