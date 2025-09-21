import { useState } from "react";
import "../Main/Main.css";
import List from "../List/List";
function Main() {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [inputValue, setInputValue] = useState("");

  function getDate() {
    const today = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [tasksByDay, setTasksByDay] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  });

  const handleDelete = (day, index) => {
    setTasksByDay((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  const addTask = () => {
    const trimmed = inputValue.trim();
    if (trimmed === "") return;

    setTasks([...tasks, trimmed]);
    setInputValue("");
  };

  return (
    <main className="toDo">
      <h2 className="toDo__date"> Today is {currentDate}</h2>
      <p className="toDo__title"> Your Tasks for the week:</p>
      <div className="toDo__layout">
        <List tasksByDay={tasksByDay} onDelete={handleDelete} />

        <div className="toDo__add">
          <input
            type="text"
            id="todo-input"
            className="toDo__input"
            placeholder="Add a new task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="toDo__add-bottom" onClick={addTask}>
            {" "}
            Add
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
