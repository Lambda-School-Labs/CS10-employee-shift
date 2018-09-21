const initialState = {
  HoOLoading: true,
  errors: {},
  allHoOs: [],
};

export default (state = initialState, action) => {
  // return shallow copy of hoos
  const newHoO = state.allHoOs.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, HoOLoading: true };

    case "READ_HOO":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("READ HOO");
      return { ...state, allHoOs: action.data, HoOLoading: false };

    case "CREATE_HOO":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("CREATED HOO");
      newHoO.push(action.data);
      return { ...state, allHoOs: newHoO, HoOLoading: false };

    case "UPDATE_HOO":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("UPDATE HOO");
      // grab shift using its index, maybe handle this differently
      const hooToUpdate = newHoO[action.index];
      // do some updates
      newHoO.splice(action.index, 1, hooToUpdate);
      return { ...state, allHoOs: newHoO, HoOLoading: false };

    case "DELETE_HOO":
      // DEV CONSOLE LOG, REMOVE ME!
      console.log("DELETE HOO");
      newHoO.splice(action.index, 1);
      return { ...state, allHoOs: newHoO, HoOLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
