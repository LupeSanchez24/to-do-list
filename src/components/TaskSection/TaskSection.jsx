import getDownIcon from "../../assets/get-down-icon.svg";
function TaskSection({ label, tasks, isVisible, toggleVisibility, onDelete }) {
  return (
    <div className="list__section">
      <div className="list__header">
        <p className="list__task-date">{label}:</p>
        <div className="list__image">
          <img
            className={`list__icon ${isVisible ? "list__icon--rotated" : ""}`}
            src={getDownIcon}
            alt={`toggle ${label.toLowerCase()} list`}
            onClick={toggleVisibility}
          />
        </div>
      </div>

      {isVisible && (
        <div className="list__container">
          {tasks.length === 0 ? (
            <p className="list__empty">No tasks for {label.toLowerCase()}.</p>
          ) : (
            tasks.map((task, index) => (
              <div key={index} className="list__task">
                <input
                  type="checkbox"
                  className="list__checkbox"
                  id={`${label}-task-${index}`}
                />
                <label
                  className="list__activity"
                  htmlFor={`${label}-task-${index}`}
                >
                  {task}
                </label>
                <button
                  className="list__delete"
                  onClick={() => onDelete(label, index)}
                >
                  DELETE
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
export default TaskSection;
