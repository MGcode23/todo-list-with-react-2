import React, { useState } from "react";

const Tasks = {
  pending: "",
};

const Home = () => {
  const [task, setTask] = useState(Tasks);
  const [allTask, setAllTask] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.pending.trim() != "") {
      setAllTask([...allTask, task]);
      setTask(Tasks);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();
    handleSubmit(event);
  };

  return (
    <>
      <div className="container">
        <h1>To Do List!</h1>
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            type="text"
            placeholder="Task"
            name="pending"
            className="form-control me-2"
            value={task.pending}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        {error && (
          <div className="alert alert-danger">
            The cell must not be empty <i className="far fa-frown"></i>
          </div>
        )}
        <ul className="list-group">
          {allTask.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              {item.pending}
              <i
                className="fas fa-trash-alt"
                onClick={() =>
                  setAllTask(
                    allTask.filter(
                      (t, currentIndex) => index !== currentIndex
                    )
                  )
                }
              ></i>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          {allTask.length} {allTask.length === 1 ? "task" : "tasks"} left
        </div>
      </div>
    </>
  );
};

export default Home;
