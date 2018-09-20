const initialState = {
  hoosLoading: true,
  errors: {},
  allHoOs: [],
};

// TODO: UPDATE ME AND FIX ME

export default (state = initialState, action) => {
  // return shallow copy of hoos
  const hoos = state.allHoOs.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, hoosLoading: true };

    case "READ_HOOS":
      return { ...state, allHoOs: [...action.data], hoosLoading: false };

    case "CREATE_HOOS":
      hoos.push(action.shift);
      return { ...state, allHoOs: hoos, hoosLoading: false };

    case "UPDATE_HOOS":
      // grab shift using its index, maybe handle this differently
      const shiftToUpdate = hoos[action.index];
      // do some updates
      hoos.splice(action.index, 1, shiftToUpdate);
      return { ...state, allHoOs: hoos, hoosLoading: false };

    case "DELETE_HOOS":
      hoos.splice(action.index, 1);
      return { ...state, allHoOs: hoos, hoosLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
