import "../List/List.css";
import { useState } from "react";
import getDownIcon from "../../assets/get-down-icon.svg";

function List() {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }
  return (
    <div className="list">
      <div className="list__header">
        <p className="list__task-date">Today:</p>
        <div className="list__image">
          <img
            className={`list__icon ${isVisible ? "list__icon--rotated" : ""}`}
            src={getDownIcon}
            alt="toggle to-do list"
            onClick={toggleVisibility}
          />
        </div>
      </div>
      {isVisible && (
        <div className="list__container">
          <input
            type="checkbox"
            className="list__checkbox"
            id="exerciseToday"
          />
          <label className="list__activity" htmlFor="exerciseToday">
            Exercise
          </label>
          <input type="checkbox" className="list__checkbox" id="laundryToday" />
          <label className="list__activity" htmlFor="laundryToday">
            Laundry
          </label>
          <input type="checkbox" className="list__checkbox" id="readToday" />
          <label className="list__activity" htmlFor="readToday">
            Read
          </label>
        </div>
      )}
    </div>
  );
}

export default List;
