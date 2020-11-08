import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TaskItem from './TaskItem';
import CardHeader from './CardHeader';
import CreateTask from './CreateTask';
import { fetchTasks, deleteTask } from '../store/actions';

import styles from './Card.module.css';

const Tasks = () => {
  const [editTask, setEditTask] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const onFetchTasks = useCallback(() => dispatch(fetchTasks()), [dispatch]);

  useEffect(() => {
    onFetchTasks();
  }, [onFetchTasks]);

  const isEdited = id => {
    return editTask === id;
  };

  return (
    <div className="Tasks">
      <div className={styles.Card}>
        <CardHeader onAddTask={setAddTask} />
        <section className="Card">
          <ul className="Tasks__list list">
            {addTask && (
              <li className="Tasks__item editable-model-view editing">
                <div className="Task edit-side">
                  <CreateTask
                    task={editTask}
                    isEditing={false}
                    onEdit={setAddTask}
                  />
                </div>
              </li>
            )}
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                editTask={editTask}
                isEdited={isEdited}
                onEdit={setEditTask}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Tasks;
