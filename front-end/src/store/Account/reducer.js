const initialState = {
  accountLoading: true,
  errors: {},
  currentAccount: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_ACCOUNT":
      return { ...state, accountLoading: true };

    case "READ_ACCOUNT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("FETCHED ACCOUNT");
      return { ...state, currentAccount: action.data, accountLoading: false };

    case "CREATE_ACCOUNT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("CREATED ACCOUNT");
      return { ...state, currentAccount: action.data, accountLoading: false };

    case "UPDATE_ACCOUNT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("UPDATED ACCOUNT");

      return { ...state, currentAccount: action.data, accountLoading: false };

    case "DELETE_ACCOUNT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("DELETED ACCOUNT");
      return { ...state, currentAccount: null, accountLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
