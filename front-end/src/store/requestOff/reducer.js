const initialState = {
  requestOffsLoading: true,
  errors: {},
  allRequestOffs: [],
};

export default (state = initialState, action) => {
  // return shallow copy of allRequestOffs
  const newRequestOffs = state.allRequestOffs.slice();

  switch (action.type) {
    case "LOADING_REQUESTOFF":
      return { ...state, requestOffsLoading: true };

    case "READ_REQUESTOFF":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("FETCHED REQUESTOFF", action.data);
      return {
        ...state,
        allRequestOffs: action.data,
        requestOffsLoading: false,
      };

    case "CREATE_REQUESTOFF":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("CREATED requestOff", action.data);
      newRequestOffs.push(action.data);
      return {
        ...state,
        allRequestOffs: newRequestOffs,
        requestOffsLoading: false,
      };

    case "UPDATE_REQUESTOFF":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("UPDATED requestOff", action.data);
      // grab requestOff using its index, maybe handle this differently
      const requestOffToUpdate = newRequestOffs[action.index];
      // do some updates
      newRequestOffs.splice(action.index, 1, requestOffToUpdate);
      return {
        ...state,
        allRequestOffs: newRequestOffs,
        requestOffsLoading: false,
      };

    case "DELETE_REQUESTOFF":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("DELETED requestOff", action.data);
      newRequestOffs.splice(action.index, 1);
      return {
        ...state,
        allRequestOffs: newRequestOffs,
        requestOffsLoading: false,
      };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
