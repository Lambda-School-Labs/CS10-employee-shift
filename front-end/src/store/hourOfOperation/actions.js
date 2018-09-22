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

export const postHoursOfOperation = (day, open_time, close_time) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_HOO" });

  const token = getState().user.token;
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Get account
  const account = 1;

  const body = JSON.stringify({
    account: account,
    day: day,
    open_time: open_time,
    close_time: close_time,
  });

  console.log(body, headers);

  axios({
    method: "post",
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
      if (err.status < 500) {
        console.log("Server Error!");
        return { status: err.status, data: err.data };
      } else if (err.status === 403 || err.status === 401) {
        dispatch({ type: "ERROR", data: err.data });
        throw err.data;
      }
    });
};

// TODO: fill in correct data to send. ID?
export const updateHoursOfOperation = (id, day, open_time, close_time) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_HOO" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Get account
  const account = 1;

  const body = JSON.stringify({
    account: account,
    open_time: open_time,
    close_time: close_time,
  });

  axios({
    method: "update",
    // TODO: use ID for the end point dynamically
    url: `${process.env.REACT_APP_ROOT_URL}/api/hoo/1`,
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
export const deleteHoursOfOperation = id => (dispatch, getState) => {
  dispatch({ type: "LOADING_HOO" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  axios({
    method: "delete",
    // TODO: use ID for the end point dynamically
    url: `${process.env.REACT_APP_ROOT_URL}/api/hoo/1`,
    headers: headers,
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
