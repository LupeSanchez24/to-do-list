import { useState } from "react";
import "../Main/Main.css";
import getDownIcon from "../../assets/get-down-icon.svg";
function Main() {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [isVisible, setIsVisible] = useState(true);

  function getDate() {
    const today = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <main className="toDo">
      {" "}
      <h2 className="toDo__date"> Today is {currentDate}</h2>
      <p className="toDo__title"> Your Tasks for the week:</p>
      <div className="toDo__header">
        <p className="toDo__task-date">Today:</p>
        <div className="toDo__image">
          <img
            className={`toDo__icon ${isVisible ? "toDo__icon--rotated" : ""}`}
            src={getDownIcon}
            alt="toggle to-do list"
            onClick={toggleVisibility}
          />
        </div>
      </div>
      {isVisible && (
        <div className="toDo__container">
          <input
            type="checkbox"
            className="toDo__checkbox"
            id="exerciseToday"
          />
          <label className="toDo__activity" htmlFor="exerciseToday">
            Exercise
          </label>
          <input type="checkbox" className="toDo__checkbox" id="laundryToday" />
          <label className="toDo__activity" htmlFor="laundryToday">
            Laundry
          </label>
          <input type="checkbox" className="toDo__checkbox" id="readToday" />
          <label className="toDo__activity" htmlFor="readToday">
            Read
          </label>
        </div>
      )}
      {/*Before*/}
      {/*<div className="toDo__container">
        <p className="toDo__task-date">Today:</p>
        <img
          className="toDo__icon"
          src={getDownIcon}
          alt="toggle to-do list"
          onClick={toggleVisibility}
        />
        {isVisible && (
          <>
            <input
              type="checkbox"
              className="toDo__checkbox"
              id="exerciseToday"
            />
            <label className="toDo__activity" htmlFor="exerciseToday">
              Exercise
            </label>
            <input
              type="checkbox"
              className="toDo__checkbox"
              id="laundryToday"
            />
            <label className="toDo__activity" htmlFor="laundryToday">
              Laundry
            </label>
            <input type="checkbox" className="toDo__checkbox" id="readToday" />
            <label className="toDo__activity" htmlFor="readToday">
              Read
            </label>
          </>
        )}
      </div>
      <div className="toDo__container">
        <p className="toDo__task-date">Tomorrow:</p>
        <img className="toDo__icon" src={getDownIcon} alt="get down icon" />
        <input
          type="checkbox"
          className="toDo__checkbox"
          id="exerciseTomorrow"
        />
        <label className="toDo__activity" htmlFor="exerciseTomorrow">
          Exercise
        </label>
        <input
          type="checkbox"
          className="toDo__checkbox"
          id="laundryTomorrow"
        />
        <label className="toDo__activity" htmlFor="laundryTomorrow">
          Laundry
        </label>
        <input type="checkbox" className="toDo__checkbox" id="readTomorrow" />
        <label className="toDo__activity" htmlFor="readTomorrow">
          Read
        </label>
      </div>
      <div className="toDo__container">
        <p className="toDo__task-date">This Week:</p>
        <img className="toDo__icon" src={getDownIcon} alt="get down icon" />
        <input
          type="checkbox"
          className="toDo__checkbox"
          id="exerciseThisWeek"
        />
        <label className="toDo__activity" htmlFor="exerciseThisWeek">
          Exercise
        </label>
        <input
          type="checkbox"
          className="toDo__checkbox"
          id="laundryThisWeek"
        />
        <label className="toDo__activity" htmlFor="laundryThisWeek">
          Laundry
        </label>
        <input type="checkbox" className="toDo__checkbox" id="readThisWeek" />
        <label className="toDo__activity" htmlFor="readThisWeek">
          Read
        </label>
        </div>*/}
    </main>
  );
}

export default Main;
