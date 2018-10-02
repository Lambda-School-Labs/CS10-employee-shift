import axios from "axios";

export const getRequestOffs = () => (dispatch, getState) => {
  dispatch({ type: "LOADING_REQUESTOFF" });
  const headers = { "Content-Type": "application/json" };
  const token = getState().user.token;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  console.log(headers);
  axios
    // Need user in body? Or is it read off of token?
    .get(`${process.env.REACT_APP_ROOT_URL}/api/requestoff/`, { headers })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "READ_REQUESTOFF", data: res.data });
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

// TODO: fill in correct data to send
export const postRequestOff = (start_datetime, end_datetime, reason) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_REQUESTOFF" });
  const token = getState().user.token;
  const profile = getState().user.currentUser.id;
  //const user = getState().user.currentUser.id; Implement once getUser works correctly
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    end_datetime,
    profile,
    reason,
    start_datetime,
  });

  // DEV CONSOLE LOG, REMOVE ME
  console.log("posting with:", body);

  axios({
    method: "post",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/requestoff/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 201) {
        return dispatch({ type: "CREATE_REQUESTOFF", data: res.data });
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

export const updateRequestOff = (id, startTime, endTime) => (
  dispatch,
  getState
) => {
  dispatch({ type: "LOADING_REQUESTOFF" });
  const token = getState().user.token;
  const profile = getState().user.currentUser.id;

  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({
    startTime: startTime,
    endTime: endTime,
  });

  axios({
    method: "update",
    // TODO: fill correct end point using ID
    url: `${process.env.REACT_APP_ROOT_URL}/api/requestoff/${profile}//`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "UPDATE_REQUESTOFF", data: res.data });
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

export const deleteRequestOff = id => (dispatch, getState) => {
  dispatch({ type: "LOADING_REQUESTOFF" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const body = JSON.stringify({ id: id });

  axios({
    method: "delete",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/requestoff/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "DELETE_REQUESTOFF", data: res.data });
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
