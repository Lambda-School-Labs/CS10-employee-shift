import axios from "axios";

// TODO: Refactor to use OAuth2

// Action to get user when the token is saved in local storage

export const getUser = () => (dispatch, getState) => {
  dispatch({ type: "FETCHING_USER" });

  const token = getState().user.token;

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Token ${token}`;
  }

  axios
    // Dummy URL
    .get("http://djangodashboard.herokuapp.com/rest-auth/login/", { headers })
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
  const headers = {
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({ username, password });

  // currently: dummy login URL
  axios({
    url: "http://djangodashboard.herokuapp.com/rest-auth/login/",
    method: "post",
    headers: headers,
    data: body,
  })
    // OAUTH2 POST (in progress)
    //(
    //     axios({
    //     //   method: "post",
    //     //   // Set Access Token URL
    //     //   url: `${ROOT_URL}/o/token/`,
    //     //   // Set Headers
    //     //   headers: {
    //     //     "Content-Type": "application/x-www-form-urlencoded",
    //     //     "Cache-Control": "no-cache",
    //     //   },
    //     //   // Interpolate variables in the strings using Template Literals
    //     //   data: `grant_type=${GRANT_TYPE}&username=${username}&password=${password}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    //     // })
    //     }
    //   )
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
        // DEVELOPMENT CONSOLE LOG : REMOVE ME
        console.log(res.data);
        dispatch({ type: "SIGNIN_SUCCESSFUL", data: res.data });
        return res.data;
      } else if (res.status === 403 || res.status === 401) {
        dispatch({ type: "ERROR", data: res.data });
        throw res.data;
      } else {
        dispatch({ type: "SIGNIN_FAILED", data: res.data });
        throw res.data;
      }
    });
};
