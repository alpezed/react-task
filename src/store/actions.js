import * as actionTypes from './actionTypes';

export const addTask = data => async dispatch => {
  try {
    const response = await fetch(
      'https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ4MjM5NjAsIm5iZiI6MTYwNDgyMzk2MCwianRpIjoiMWQ3ZTI5MjMtOWEwOC00YTY0LWE1OTItMTVmNzc3MDExOTlmIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.SwW-1KoKUvYDFVwuSIsw0XKzyvc298Umif9qzNHetAE`,
        },
        body: JSON.stringify({
          task_msg: data.description,
          task_date: data.date,
          task_time: data.time,
          assigned_user: data.user,
        }),
      }
    );

    const { results } = await response.json();

    dispatch({
      type: actionTypes.ADD_TASK,
      payload: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchTasks = () => async dispatch => {
  try {
    const response = await fetch(
      'https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ4MjM5NjAsIm5iZiI6MTYwNDgyMzk2MCwianRpIjoiMWQ3ZTI5MjMtOWEwOC00YTY0LWE1OTItMTVmNzc3MDExOTlmIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.SwW-1KoKUvYDFVwuSIsw0XKzyvc298Umif9qzNHetAE`,
        },
      }
    );

    const { results } = await response.json();

    dispatch({
      type: actionTypes.FETCH_ALL_TASKS,
      payload: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchTask = taskId => async dispatch => {
  try {
    const response = await fetch(
      `https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4/${taskId}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ4MjM5NjAsIm5iZiI6MTYwNDgyMzk2MCwianRpIjoiMWQ3ZTI5MjMtOWEwOC00YTY0LWE1OTItMTVmNzc3MDExOTlmIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.SwW-1KoKUvYDFVwuSIsw0XKzyvc298Umif9qzNHetAE`,
        },
      }
    );

    const { results } = await response.json();

    dispatch({
      type: actionTypes.FETCH_TASK,
      payload: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = (taskId, data) => async dispatch => {
  try {
    const response = await fetch(
      `https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4/${taskId}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ4MjM5NjAsIm5iZiI6MTYwNDgyMzk2MCwianRpIjoiMWQ3ZTI5MjMtOWEwOC00YTY0LWE1OTItMTVmNzc3MDExOTlmIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.SwW-1KoKUvYDFVwuSIsw0XKzyvc298Umif9qzNHetAE`,
        },
        body: JSON.stringify({
          task_msg: data.description,
          task_date: data.date,
          task_time: data.time,
          assigned_user: data.assigned_user,
        }),
      }
    );

    const { results } = await response.json();

    dispatch({
      type: actionTypes.UPDATE_TASK,
      payload: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = taskId => async dispatch => {
  try {
    const response = await fetch(
      `https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4/${taskId}`,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDQ4MjM5NjAsIm5iZiI6MTYwNDgyMzk2MCwianRpIjoiMWQ3ZTI5MjMtOWEwOC00YTY0LWE1OTItMTVmNzc3MDExOTlmIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.SwW-1KoKUvYDFVwuSIsw0XKzyvc298Umif9qzNHetAE`,
        },
      }
    );

    await response.json();

    dispatch({
      type: actionTypes.DELETE_TASK,
      task: taskId,
    });
  } catch (err) {
    console.log(err);
  }
};
