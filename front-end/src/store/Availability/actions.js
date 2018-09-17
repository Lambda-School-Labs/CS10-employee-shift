import axios from "axios";

/*
TODO: REFACTOR OUT THE WORD SHIFT ---> Availability
*/

export const getShifts = () => (dispatch, getState) => {
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const { token } = getState().auth;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  axios
    // TODO: fill correct end point
    .get(`${process.env.REACT_APP_ROOT_URL}/???`, headers)
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "READ_SHIFT", notes: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: res.data });
        throw err.data;
      }
    });
};

// TODO: fill in correct data to send
export const postShift = data => (dispatch, getState) => {
  const { token } = getState().auth;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "post",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/???`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "CREATE_SHIFT", notes: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: res.data });
        throw err.data;
      }
    });
};

// TODO: fill in correct data to send
export const updateShift = data => (dispatch, getState) => {
  const { token } = getState().auth;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "update",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/???`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "UPDATE_SHIFT", notes: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: res.data });
        throw err.data;
      }
    });
};

// TODO: fill in correct data to send
export const deleteShift = data => (dispatch, getState) => {
  const { token } = getState().auth;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "delete",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/???`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "DELETE_SHIFT", notes: res.data });
      }
    })
    .catch(err => {
      if (err.status === 401 || err.status === 403) {
        dispatch({ type: "AUTHENTICATION_ERROR", data: err.data });
        throw err.data;
      } else {
        dispatch({ type: "ERROR", data: res.data });
        throw err.data;
      }
    });
};
