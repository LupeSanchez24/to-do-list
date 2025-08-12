import "../List/List.css";
import { useState } from "react";
import getDownIcon from "../../assets/get-down-icon.svg";

function List() {
  const [isTodayVisible, setIsTodayVisible] = useState(true);
  const [isTomorrowVisible, setIsTomorrowVisible] = useState(true);

  function toggleTodayVisibility() {
    setIsTodayVisible((prev) => !prev);
  }
  function toggleTomorrowVisibility() {
    setIsTomorrowVisible((prev) => !prev);
  }

  return (
    <div className="list">
      {/* Today List*/}
      <div className="list__section">
        <div className="list__header">
          <p className="list__task-date">Today:</p>
          <div className="list__image">
            <img
              className={`list__icon ${
                isTodayVisible ? "list__icon--rotated" : ""
              }`}
              src={getDownIcon}
              alt="toggle to-do list"
              onClick={toggleTodayVisibility}
            />
          </div>
        </div>
        {isTodayVisible && (
          <div className="list__container">
            <input
              type="checkbox"
              className="list__checkbox"
              id="exerciseToday"
            />
            <label className="list__activity" htmlFor="exerciseToday">
              Exercise
            </label>
            <input
              type="checkbox"
              className="list__checkbox"
              id="laundryToday"
            />
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

      {/*Tomorrow List */}
      <div className="list__section">
        <div className="list__header">
          <p className="list__task-date">Tomorrow:</p>
          <div className="list__image">
            <img
              className={`list__icon ${
                isTomorrowVisible ? "list__icon--rotated" : ""
              }`}
              src={getDownIcon}
              alt="toggle tomorrow's to-do list"
              onClick={toggleTomorrowVisibility}
            />
          </div>
        </div>

        {isTomorrowVisible && (
          <div className="list__container">
            <input type="checkbox" className="list__checkbox" id="planWeek" />
            <label className="list__activity" htmlFor="planWeek">
              Plan Weekly Tasks
            </label>

            <input
              type="checkbox"
              className="list__checkbox"
              id="groceryShopping"
            />
            <label className="list__activity" htmlFor="groceryShopping">
              Grocery Shopping
            </label>

            <input type="checkbox" className="list__checkbox" id="callFamily" />
            <label className="list__activity" htmlFor="callFamily">
              Call Family
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
