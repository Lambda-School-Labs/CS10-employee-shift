const initialState = {
  calendarLoading: true,
  errors: {},
  allCalendar: [],
};

export default (state = initialState, action) => {
  // return shallow copy of calendar
  const calendar = state.allCalendar.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, calendarLoading: true };

    case "READ_CALENDAR":
      return {
        ...state,
        allCalendar: [...action.calendar],
        calendarLoading: false,
      };

    case "CREATE_CALENDAR":
      calendar.push(action.calendar);
      return { ...state, allCalendar: calendar, calendarLoading: false };

    case "UPDATE_CALENDAR":
      // grab calendar using its index, maybe handle this differently
      const calendarToUpdate = calendar[action.index];
      // do some updates
      calendar.splice(action.index, 1, calendarToUpdate);
      return { ...state, allCalendar: calendar, calendarLoading: false };

    case "DELETE_CALENDAR":
      calendar.splice(action.index, 1);
      return { ...state, allCalendar: calendar, calendarLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
