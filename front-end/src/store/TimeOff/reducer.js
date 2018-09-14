const initialState = {
  timeOffLoading: true,
  errors: {},
  allTimeOff: [],
};

export default (state = initialState, action) => {
  // return shallow copy of timeOff
  const timeOff = state.allTimeOff.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, timeOffLoading: true };

    case "READ_TIMEOFF":
      return {
        ...state,
        allTimeOff: [...action.timeOff],
        timeOffLoading: false,
      };

    case "CREATE_TIMEOFF":
      timeOff.push(action.timeOff);
      return { ...state, allTimeOff: timeOff, timeOffLoading: false };

    case "UPDATE_TIMEOFF":
      // grab TIMEOFF using its index, maybe handle this differently
      const timeOffToUpdate = timeOff[action.index];
      // do some updates
      timeOff.splice(action.index, 1, timeOffToUpdate);
      return { ...state, allTimeOff: timeOff, timeOffLoading: false };

    case "DELETE_TIMEOFF":
      timeOff.splice(action.index, 1);
      return { ...state, allTimeOff: timeOff, timeOffLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
