const initialState = {
  requestOffsLoading: true,
  errors: {},
  allRequestOffs: [],
};

export default (state = initialState, action) => {
  // return shallow copy of requestOffs
  const requestOffs = state.allRequestOffs.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, requestOffsLoading: true };

    case "READ_REQUESTOFF":
      return {
        ...state,
        allRequestOffs: [...action.requestOffs],
        requestOffsLoading: false,
      };

    case "CREATE_REQUESTOFF":
      requestOffs.push(action.shift);
      return {
        ...state,
        allRequestOffs: requestOffs,
        requestOffsLoading: false,
      };

    case "UPDATE_REQUESTOFF":
      // grab shift using its index, maybe handle this differently
      const shiftToUpdate = requestOffs[action.index];
      // do some updates
      requestOffs.splice(action.index, 1, shiftToUpdate);
      return {
        ...state,
        allRequestOffs: requestOffs,
        requestOffsLoading: false,
      };

    case "DELETE_REQUESTOFF":
      requestOffs.splice(action.index, 1);
      return {
        ...state,
        allRequestOffs: requestOffs,
        requestOffsLoading: false,
      };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
