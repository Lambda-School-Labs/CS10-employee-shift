const initialState = {
  shiftsLoading: true,
  errors: {},
  allShifts: [],
};

export default (state = initialState, action) => {
  // return shallow copy of shifts
  const shifts = state.allShifts.slice();

  switch (action.type) {
    case "LOADING_SHIFTS":
      return { ...state, shiftsLoading: true };

    case "READ_SHIFT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("FETCHED SHIFTS", action.data);
      return { ...state, allShifts: action.data, shiftsLoading: false };

    case "CREATE_SHIFT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("CREATED SHIFT");
      shifts.push(action.data);
      return { ...state, allShifts: shifts, shiftsLoading: false };

    case "UPDATE_SHIFT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("UPDATED SHIFT");
      // grab shift using its index, maybe handle this differently
      const shiftToUpdate = shifts[action.index];
      // do some updates
      shifts.splice(action.index, 1, shiftToUpdate);
      return { ...state, allShifts: shifts, shiftsLoading: false };

    case "DELETE_SHIFT":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("DELETED SHIFT");
      shifts.splice(action.index, 1);
      return { ...state, allShifts: shifts, shiftsLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
