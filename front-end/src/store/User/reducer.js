const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isEmployee: null,
  isLoading: true,
  currentUser: null,
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_USER":
      return { ...state, isLoading: true };

    case "FETCHED_USER":
      return {
        ...state,
        currentUser: action.data,
        isAuthenticated: true,
        isLoading: false,
      };

    case "SIGNIN_SUCCESS":
      localStorage.setItem("token", action.data.access_token);
      // TODO: Authorization level check, use refresh token?
      return {
        ...state,
        token: action.data.access_token,
        isAuthenticated: true,
        isLoading: false,
        errors: null,
      };

    case "AUTH_ERROR":
    // fall through to signout

    case "SIGNOUT_SUCCESS":
      localStorage.removeItem("token");
      return {
        ...state,
        errors: action.data,
        token: null,
        currentUser: null,
        isEmployee: null,
        isAuthenticated: false,
        isLoading: false,
      };

    // TODO: employee check
    case "SIGNUP_SUCCESS":
      localStorage.setItem("token", action.data.access_token);
      console.log(action.data);
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
        isLoading: false,
        errors: null,
      };

    case "UPDATE_SUCCESS":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("UPDATED USER");
      return {
        ...state,
        ...action.data,
        errors: null,
      };

    // TODO: double check this
    case "ERROR":
      return { ...state, errors: { ...action.data } };

    default:
      return state;
  }
};
