import React from 'react';

import CreateTask from './CreateTask';

const TaskItem = ({ task, editTask, isEdited, onEdit }) => {
  return (
    <li
      className={`Tasks__item editable-model-view ${
        isEdited(task.id) ? 'editing' : ''
      }`}
    >
      <div className="Task  view-side">
        <div className="Task__avatar avatar">
          <img
            className="user-img"
            width={32}
            height={32}
            src={task.user_icon}
            alt={task.user_name}
          />
        </div>
        <div className="Task__content">
          <div className="Task__description">{task.task_msg}</div>
          <div className="Task__date">
            <span>{task.task_date}</span>
          </div>
        </div>
        <div className="Task__actions">
          <div className="Task__buttons">
            <button
              className="Task__editButton btn btn-small btn-icon edit"
              onClick={() => onEdit(task.id)}
            >
              <span>&#9998;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="Task edit-side">
        {isEdited && (
          <CreateTask
            isEdited={isEdited}
            onEdit={onEdit}
            task={task.id}
            editTask={editTask}
            isEditing={true}
          />
        )}
      </div>
    </li>
  );
};

export default TaskItem;
