const initialState = {
  shiftsLoading: true,
  errors: {},
  allShifts: [],
};

/*
TODO: REFACTOR OUT THE WORD SHIFT ---> Contact
*/

export default (state = initialState, action) => {
  // return shallow copy of shifts
  const shifts = state.allShifts.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, shiftsLoading: true };

    case "READ_SHIFT":
      return { ...state, allShifts: [...action.shifts], shiftsLoading: false };

    case "CREATE_SHIFT":
      shifts.push(action.shift);
      return { ...state, allShifts: shifts, shiftsLoading: false };

    case "UPDATE_SHIFT":
      // grab shift using its index, maybe handle this differently
      const shiftToUpdate = shifts[action.index];
      // do some updates
      shifts.splice(action.index, 1, shiftToUpdate);
      return { ...state, allShifts: shifts, shiftsLoading: false };

    case "DELETE_SHIFT":
      shifts.splice(action.index, 1);
      return { ...state, allShifts: shifts, shiftsLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
