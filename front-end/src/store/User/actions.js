import axios from "axios";

// WIP: Action to get user's data if the token is saved in local storage
export const getUser = () => (dispatch, getState) => {
  dispatch({ type: "FETCHING_USER" });

  const token = getState().user.token;
  if (token) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // TODO: Redo with correct endpoint to get user (not list of users)
    axios
      .get(`${process.env.REACT_APP_ROOT_URL}/api/users/`, {
        headers,
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "FETCHED_USER", user: res.data });
          return res.data;
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "AUTH_ERROR", data: err.data });
      });
  } else dispatch({ type: "AUTH_ERROR" });
};

// TODO: Encrypt password
export const signin = (username, password) => dispatch => {
  const body = JSON.stringify({
    grant_type: "password",
    username: `${username}`,
    password: `${password}`,
    client_id: `${process.env.REACT_APP_CLIENT_ID}`,
    client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
  });

  axios({
    method: "post",
    url: `${process.env.REACT_APP_ROOT_URL}/o/token/`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
    },
    data: body,
  })
    .then(res => {
      if (res.status < 500) {
        return { status: res.status, data: res.data };
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: "SIGNIN_SUCCESS", data: res.data });
        return res.data;
      } else if (res.status === 403 || res.status === 401) {
        dispatch({ type: "ERROR", data: res.data });
        throw res.data;
      }
      // TODO: More error checking? Re-do with catch?
    });
};

export const signout = token => dispatch => {
  if (token) {
    const body = JSON.stringify({
      token: token,
      client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
    });

    axios({
      method: "post",
      url: `${process.env.REACT_APP_ROOT_URL}/o/revoke_token/`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: body,
    })
      .then(res => {
        if (res.status < 500) {
          return { status: res.status, data: res.data };
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "SIGNOUT_SUCCESS", data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "ERROR", data: res.data });
          throw res.data;
        }
      });
  } else dispatch({ type: "SIGNOUT_SUCCESS" });
};

// TODO: Encrypt password
export const signup = (
  username,
  password,
  re_password,
  email,
  firstName,
  lastName
) => dispatch => {
  const body = JSON.stringify({
    username: username,
    password: password,
    re_password: re_password,
    email: email,
    first_name: firstName,
    last_name: lastName,
    is_staff: "true",
  });

  axios({
    method: "post",
    url: `${process.env.REACT_APP_ROOT_URL}/api/sign_up/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  })
    .then(res => {
      if (res.status < 500) {
        return { status: res.status, data: res.data };
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 201) {
        dispatch({ type: "SIGNUP_SUCCESS", data: res.data });
        return res.data;
      } else if (res.status === 403 || res.status === 401) {
        dispatch({ type: "ERROR", data: res.data });
        throw res.data;
      }
    });
};

// TODO: Update password
// Patch to /api/users
// Still needs user group persmission

export const updateUser = (email, password) => dispatch => {
  const token = getState().user.token;
  const id = getState().user.user;

  if (token) {
    const body = JSON.stringify({
      token: token,
      client_id: `${process.env.REACT_APP_CLIENT_ID}`,
      client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
    });

    if (email) body[email] = email;
    if (password) body[password] = password;

    axios({
      method: "patch",
      url: `${process.env.REACT_APP_ROOT_URL}/api/users/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    })
      .then(res => {
        if (res.status < 500) {
          return { status: res.status, data: res.data };
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "UPDATE_SUCCESS", data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "ERROR", data: res.data });
          throw res.data;
        }
      });
  } else dispatch({ type: "ERROR" });
};
