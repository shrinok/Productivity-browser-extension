import React, { useState } from "react";
import ReactDOM from "react-dom";
import BookmarkOrganizer from "./components/BookmarkOrganizer";
import FocusTimer from "./components/FocusTimer";
import TaskManager from "./components/TaskManager";

const Popup = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  const renderComponent = () => {
    switch (currentComponent) {
      case "TaskManager":
        return <TaskManager />;
      case "FocusTimer":
        return <FocusTimer />;
      case "BookmarkOrganizer":
        return <BookmarkOrganizer />;
      default:
        return (
          <div>
            <h1>Productivity Extension</h1>
            <button onClick={() => setCurrentComponent("TaskManager")}>
              Manage Tasks
            </button>
            <button onClick={() => setCurrentComponent("FocusTimer")}>
              Start Focus Timer
            </button>
            <button onClick={() => setCurrentComponent("BookmarkOrganizer")}>
              Organize Bookmarks
            </button>
          </div>
        );
    }
  };

  return <div>{renderComponent()}</div>;
};

ReactDOM.render(<Popup />, document.getElementById("root"));
