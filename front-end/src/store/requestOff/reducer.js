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
      return {
        ...state,
        allRequestOffs: action.data,
        requestOffsLoading: false,
      };

    case "CREATE_REQUESTOFF":
      newRequestOffs.push(action.data);
      return {
        ...state,
        allRequestOffs: newRequestOffs,
        requestOffsLoading: false,
      };

    case "UPDATE_REQUESTOFF":
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
