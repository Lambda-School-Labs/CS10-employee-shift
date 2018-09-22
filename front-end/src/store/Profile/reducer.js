const initialState = {
  profileLoading: true,
  errors: {},
  currentProfile: null,
  // implement me
  allProfiles: [],
};

export default (state = initialState, action) => {
  // return shallow copy of allProfiles
  const newProfiles = state.allProfiles.slice();

  switch (action.type) {
    case "LOADING_PROFILE":
      return { ...state, profileLoading: true };

    case "READ_PROFILE":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("FETCHED SHIFTS", action.data);
      return { ...state, currentProfile: action.data, profileLoading: false };

    /* For managers only?? REFACTOR FOLLOWING
    */
    // case "CREATE_PROFILE":
    //   // DEV CONSOLE LOG, REMOVE ME!
    //   console.log("CREATED SHIFT");
    //   shifts.push(action.data);
    //   return { ...state, currentProfile: shifts, profileLoading: false };

    // case "UPDATE_PROFILE":
    //   // DEV CONSOLE LOG, REMOVE ME!
    //   console.log("UPDATED SHIFT");
    //   // grab shift using its index, maybe handle this differently
    //   const shiftToUpdate = shifts[action.index];
    //   // do some updates
    //   shifts.splice(action.index, 1, shiftToUpdate);
    //   return { ...state, currentProfile: shifts, profileLoading: false };

    // case "DELETE_PROFILE":
    //   // DEV CONSOLE LOG, REMOVE ME!
    //   console.log("DELETED SHIFT");
    //   shifts.splice(action.index, 1);
    //   return { ...state, currentProfile: shifts, profileLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
