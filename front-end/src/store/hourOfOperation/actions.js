import axios from "axios";

export const getHoursOfOperation = () => (dispatch, getState) => {
  dispatch({ type: "LOADING_HOO" });
  const token = getState().user.token;

  if (token) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_ROOT_URL}/api/hoo/`, { headers })
      .then(res => {
        if (res.status === 200) {
          return dispatch({ type: "READ_HOO", data: res.data });
        }
      })
      .catch(err => {
        if (err.status === 401 || err.status === 403) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
          throw err.data;
        } else {
          dispatch({ type: "ERROR", data: err.data });
          throw err.data;
        }
      });
  }
};

// TODO: fill in correct data to send
export const postHoursOfOperation = (open_time, close_time) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_HOO" });

  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    open_time: open_time,
    close_time: close_time,
  });

  axios({
    method: "post",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/hoo/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "CREATE_HOO", data: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};

// TODO: fill in correct data to send. ID?
export const updateHoursOfOperation = (id, open_time, close_time) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_HOO" });
  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    open_time: open_time,
    close_time: close_time,
  });

  axios({
    method: "update",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/hoo/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "UPDATE_HOO", data: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};

/* 
TODO: Is this needed?
*/
export const deleteHoursOfOperation = (id, open_time, close_time) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_HOO" });
  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    open_time: open_time,
    close_time: close_time,
  });

  axios({
    method: "delete",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/hoo/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "DELETE_HOO", data: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};
