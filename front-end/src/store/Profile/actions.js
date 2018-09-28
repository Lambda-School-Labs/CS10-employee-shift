import axios from "axios";

export const getProfile = () => (dispatch, getState) => {
  dispatch({ type: "LOADING_PROFILE" });
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const { token } = getState().user.token;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  axios
    .get(`${process.env.REACT_APP_ROOT_URL}/api/profiles/`, headers)
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "READ_PROFILE", data: res.data });
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

/* Implement me on back-end */
export const getAllProfiles = () => (dispatch, getState) => {
  dispatch({ type: "LOADING_PROFILE" });
  const headers = { "Content-Type": "application/json" };
  const token = getState().user.token;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  axios
    .get(`${process.env.REACT_APP_ROOT_URL}/api/profiles/`, { headers })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "READ_PROFILES", data: res.data });
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
export const postProfile = data => (dispatch, getState) => {
  dispatch({ type: "LOADING_PROFILE" });
  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "post",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/profiles/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "CREATE_PROFILE", data: res.data });
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
export const updateProfile = data => (dispatch, getState) => {
  dispatch({ type: "LOADING_PROFILE" });
  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "update",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/profiles/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "UPDATE_PROFILE", data: res.data });
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
export const deleteProfile = data => (dispatch, getState) => {
  dispatch({ type: "LOADING_PROFILE" });
  const { token } = getState().user.token;
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // fill me
  const body = JSON.stringify({ data });

  axios({
    method: "delete",
    // TODO: fill correct end point
    url: `${process.env.REACT_APP_ROOT_URL}/api/profiles/`,
    headers: headers,
    data: body,
  })
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: "DELETE_PROFILE", data: res.data });
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
