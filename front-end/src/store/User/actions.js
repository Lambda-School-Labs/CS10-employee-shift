import axios from "axios";

// Action to get user and their data when the token is saved in local storage
export const getUser = () => (dispatch, getState) => {
  dispatch({ type: "FETCHING_USER" });

  const token = getState().user.token;

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  axios
    // Dummy URL
    .get("http://djangodashboard.herokuapp.com//rest-auth/login/", { headers })
    .then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return { status: res.status, data };
        });
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: "FETCHED_USER", user: res.data });
        return res.data;
      } else if (res.status >= 400 && res.status < 500) {
        dispatch({ type: "ERROR", data: res.data });
        throw res.data;
      }
    });
};

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
    });
};

export const signout = token => dispatch => {
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
};

// TODO: signup action

export const signup = token => dispatch => {
  const body = JSON.stringify({
    token: token,
    client_id: `${process.env.REACT_APP_CLIENT_ID}`,
    client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
  });

  // dev console log REMOVE ME
  console.log("WIP: Not yet functional");

  axios({
    method: "post",
    // fix dis below
    url: `${process.env.REACT_APP_ROOT_URL}/???`,
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
        dispatch({ type: "SIGNUP_SUCCESS", data: res.data });
        return res.data;
      } else if (res.status === 403 || res.status === 401) {
        dispatch({ type: "ERROR", data: res.data });
        throw res.data;
      }
    });
};
