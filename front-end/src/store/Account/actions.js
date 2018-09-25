import axios from "axios";

export const getAccount = () => (dispatch, getState) => {
  dispatch({ type: "LOADING_ACCOUNT" });
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const token = getState().user.token;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  axios
    // TODO: fill correct end point
    .get(`${process.env.REACT_APP_ROOT_URL}/api/accounts/`, headers)
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "READ_ACCOUNT", data: res.data });
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
export const postAccount = data => (dispatch, getState) => {
  dispatch({ type: "LOADING_ACCOUNT" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "post",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/accounts/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "CREATE_ACCOUNT", data: res.data });
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
export const updateAccount = data => (dispatch, getState) => {
  dispatch({ type: "LOADING_ACCOUNT" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "update",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/accounts/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "UPDATE_ACCOUNT", data: res.data });
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
export const deleteAccount = data => (dispatch, getState) => {
  dispatch({ type: "LOADING_ACCOUNT" });
  const token = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "delete",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/accounts/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "DELETE_ACCOUNT", data: res.data });
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
