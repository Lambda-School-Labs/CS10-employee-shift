const initialState = {
  HoOLoading: true,
  errors: {},
  allHoOs: [],
};

export default (state = initialState, action) => {
  // return shallow copy of hoos
  const newHoO = state.allHoOs.slice();

  switch (action.type) {
    case "LOADING_HOO":
      return { ...state, HoOLoading: true };

    case "READ_HOO":
      return { ...state, allHoOs: action.data, HoOLoading: false };

    case "CREATE_HOO":
      newHoO.push(action.data);
      return { ...state, allHoOs: newHoO, HoOLoading: false };

    case "UPDATE_HOO":
      const updatedHoO = action.data;
      const indexToUpdate = newHoO.indexOf(
        newHoO.filter(shift => shift.id === updatedHoO.id)[0]
      );
      newHoO.splice(indexToUpdate, 1, updatedHoO);
      return { ...state, allHoOs: newHoO, newHoOLoading: false };

    case "DELETE_HOO":
      const new_hoO = newHoO.filter(HoO => HoO.id !== action.data);
      console.log(new_hoO, action.data);
      return { ...state, allHoOs: new_hoO, HoOLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
