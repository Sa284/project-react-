import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Actions/actions';

function AddTask() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(description));
    setDescription('');
  };

  return (
    <div className="add-task-container">
      <form onSubmit={handleSubmit} className="add-task-form">
        <div className="input-button-container">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-input"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
