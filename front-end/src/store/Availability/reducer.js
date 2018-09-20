const initialState = {
  calendarLoading: true,
  errors: {},
  allDays: [],
};

// TODO: UPDATE ME AND FIX ME

export default (state = initialState, action) => {
  // return shallow copy of days
  const days = state.allDays.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, calendarLoading: true };

    case "READ_DAY":
      return {
        ...state,
        allDays: [...action.days],
        calendarLoading: false,
      };

    case "CREATE_DAY":
      days.push(action.days);
      return { ...state, allDays: days, calendarLoading: false };

    case "UPDATE_DAY":
      // grab days using its index, maybe handle this differently
      const calendarToUpdate = days[action.index];
      // do some updates
      days.splice(action.index, 1, calendarToUpdate);
      return { ...state, allDays: days, calendarLoading: false };

    case "DELETE_DAY":
      days.splice(action.index, 1);
      return { ...state, allDays: days, calendarLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
