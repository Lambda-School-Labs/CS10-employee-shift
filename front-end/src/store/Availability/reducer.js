const initialState = {
  availabilityLoading: true,
  errors: {},
  allAvailabilities: [],
};

export default (state = initialState, action) => {
  // return shallow copy of allAvailabilities
  const newAvailabilities = state.allAvailabilities.slice();

  switch (action.type) {
    case "LOADING_AVAILABILITIES":
      return { ...state, availabilityLoading: true };

    case "READ_AVAILABILITIES":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("FETCHED Availabilities", action.data);
      return {
        ...state,
        allAvailabilities: action.data,
        availabilityLoading: false,
      };

    case "CREATE_AVAILABILITIES":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("CREATED AVAILABILITIES", action.data);
      newAvailabilities.push(action.data);
      return {
        ...state,
        allAvailabilities: newAvailabilities,
        availabilityLoading: false,
      };

    case "UPDATE_AVAILABILITIES":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("UPDATED AVAILABILITIES", action.data);
      // grab shift using its index, maybe handle this differently
      const availabilityUpdate = newAvailabilities[action.data.index];
      // do some updates
      newAvailabilities.splice(action.index, 1, availabilityUpdate);
      return {
        ...state,
        allAvailabilities: newAvailabilities,
        availabilityLoading: false,
      };

    case "DELETE_AVAILABILITIES":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("DELETED AVAILABILITIES", action.data);
      newAvailabilities.splice(action.index, 1);
      return {
        ...state,
        allAvailabilities: newAvailabilities,
        availabilityLoading: false,
      };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.data };

    default:
      return state;
  }
};
