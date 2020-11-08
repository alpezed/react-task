import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import timepicker from 'timepicker';
import datepicker from 'bootstrap-datepicker';
import moment from 'moment';
import Glyphicon from '@strongdm/glyphicon';
import 'timepicker/jquery.timepicker.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

import {
  addTask,
  fetchTask,
  updateTask,
  fetchTasks,
  deleteTask,
} from '../store/actions';

const CreateTask = ({ editTask, isEditing, onEdit }) => {
  const datepickerRef = useRef();
  const timepickerRef = useRef();
  const [description, setDescription] = useState('Follow Up');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [assignUser, setAssignUser] = useState('');

  const task = useSelector(state => state.task);
  const dispatch = useDispatch();
  const onAddNewTask = useCallback(data => dispatch(addTask(data)), [dispatch]);
  const onAUpdateTask = useCallback(
    (taskId, data) => dispatch(updateTask(taskId, data)),
    [dispatch]
  );
  const onFetchTask = useCallback(taskId => dispatch(fetchTask(taskId)), [
    dispatch,
  ]);
  const onFetchTasks = useCallback(() => dispatch(fetchTasks()), [dispatch]);
  const onDeleteTask = useCallback(taskId => dispatch(deleteTask(taskId)), [
    dispatch,
  ]);

  useEffect(() => {
    $(timepickerRef.current).timepicker({ timeFormat: 'h:i a' });
    $(datepickerRef.current).datepicker({ format: 'yyyy-mm-dd' });
  }, []);

  useEffect(() => {
    if (isEditing && editTask) {
      onFetchTask(editTask);
    }
  }, [isEditing, editTask, onFetchTask]);

  useEffect(() => {
    if (task) {
      const formatSeconds = moment.utc(task.task_time * 1000).format('HH:mm a');
      setDate(task.task_date);
      setTime(formatSeconds);
      setDescription(task.task_msg);
      setAssignUser(task.assigned_user);
    }
  }, [task]);

  const onCreateTask = async e => {
    e.preventDefault();

    let toSeconds = new Date().getTime();
    if (timepickerRef.current.value.length > 0) {
      const _datetime = moment(timepickerRef.current.value, ['h:mm A']).format(
        'HH:mm'
      );
      const _time = _datetime.split(':');
      // output time to seconds
      toSeconds = parseInt(_time[0]) * 60 * 60 + parseInt(+_time[1]) * 60;
    }

    if (isEditing) {
      await onAUpdateTask(editTask, {
        description,
        date,
        time: toSeconds,
        assigned_user: assignUser,
      });
      onFetchTasks();
      onEdit(false);
    } else {
      await onAddNewTask({
        user: assignUser,
        date,
        time: toSeconds,
        description,
      });
      onEdit(false);
    }
  };

  const onRemoveTask = async e => {
    e.preventDefault();
    const confirm = window.confirm(
      'Are you sure you want to delete this Task?'
    );

    if (confirm) {
      if (isEditing) {
        await onDeleteTask(editTask);
      }
    }
  };

  return (
    <form className="bbf-form">
      <fieldset>
        <ul>
          <li className="bbf-field field-text">
            <label htmlFor="c705_text">Task Description</label>
            <div className="bbf-editor">
              <input
                id="c705_text"
                name="text"
                placeholder="Description of task"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="bbf-help" /> <div className="bbf-error" />
          </li>
          <li className="bbf-field field-date">
            <label htmlFor="c705_date">Date</label>
            <div className="bbf-editor">
              <div id="c705_date" name="date" className="date-time-picker">
                <input
                  ref={datepickerRef}
                  placeholder="Date"
                  type="text"
                  className="datepicker-input"
                  autoComplete="off"
                  defaultValue={date}
                  onBlur={e => setDate(e.target.value)}
                />
                <input
                  ref={timepickerRef}
                  placeholder="Time"
                  type="text"
                  className="timepicker-input ui-timepicker-input"
                  autoComplete="off"
                  value={time}
                  onChange={e => setTime(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="bbf-help" /> <div className="bbf-error" />
          </li>
          <li className="bbf-field field-assigned_to">
            <label htmlFor="c705_assigned_to">Assign User</label>
            <select
              name="assigned_to"
              id="c705_assigned_to"
              onChange={e => setAssignUser(e.target.value)}
              value={assignUser}
            >
              <option value=""></option>
              <option value="user_2e6297571fcb4e07ae724ef5a82a2353">
                Saravanan Testing
              </option>
            </select>
          </li>
        </ul>
      </fieldset>
      <div className="actions">
        {isEditing && (
          <button
            className="delete btn-link"
            style={{ cursor: 'pointer' }}
            onClick={onRemoveTask}
          >
            <Glyphicon glyph="trash" />
          </button>
        )}
        <button
          type="button"
          className="btn btn-link cancel-edit"
          onClick={() => onEdit(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onCreateTask}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
