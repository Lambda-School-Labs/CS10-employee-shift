import axios from "axios";

export const getShifts = () => (dispatch, getState) => {
  dispatch({ type: "LOADING_SHIFTS" });
  const token = getState().user.token;

  if (token) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${process.env.REACT_APP_ROOT_URL}/api/shifts/`, { headers })
      .then(res => {
        if (res.status === 200) {
          return dispatch({ type: "READ_SHIFT", data: res.data });
        }
      })
      .catch(err => {
        if (err.status === 401 || err.status === 403) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
          throw err;
        } else {
          dispatch({ type: "ERROR", data: err.data });
          throw err;
        }
      });
    // else do something, logout?
  }
};

// TODO: fill in correct data to send
export const postShift = (startTime, endTime) => (dispatch, getState) => {
  dispatch({ type: "LOADING_SHIFTS" });

  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    startTime: startTime,
    endTime: endTime,
  });

  axios({
    method: "post",
    url: `${process.env.REACT_APP_ROOT_URL}/api/shifts/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "CREATE_SHIFT", data: res.data });
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

export const updateShift = (id, startTime, endTime) => (dispatch, getState) => {
  dispatch({ type: "LOADING_SHIFTS" });

  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    id: id,
    startTime: startTime,
    endTime: endTime,
  });

  // TODO: use ID?
  axios({
    method: "update",
    url: `${process.env.REACT_APP_ROOT_URL}/api/shifts`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "UPDATE_SHIFT", data: res.data });
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

export const deleteShift = id => (dispatch, getState) => {
  dispatch({ type: "LOADING_SHIFTS" });

  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({ id: id });

  axios({
    method: "delete",
    // TODO: use ID?
    url: `${process.env.REACT_APP_ROOT_URL}/api/shifts`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "DELETE_SHIFT", data: res.data });
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
