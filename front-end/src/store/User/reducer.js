const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isEmployee: null,
  isLoading: true,
  user: null,
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_USER":
      return { ...state, isLoading: true };

    case "FETCHED_USER":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        // TODO: user data WIP
        // user: action.user,
      };

    // TODO: Employee check
    case "SIGNIN_SUCCESS":
      localStorage.setItem("token", action.data.access_token);
      return {
        ...state,
        ...action.data,
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
        user: null,
        isEmployee: null,
        isAuthenticated: false,
        isLoading: false,
      };

    // TODO: employee check
    case "SIGNUP_SUCCESS":
      localStorage.setItem("token", action.data.access_token);
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
        isLoading: false,
        errors: null,
      };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
