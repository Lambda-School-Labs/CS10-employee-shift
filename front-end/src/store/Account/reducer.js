const initialState = {
  employerLoading: true,
  errors: {},
  employer: [],
};

// TODO: UPDATE ME AND FIX ME

export default (state = initialState, action) => {
  // return shallow copy of employers
  const employers = state.employer.slice();

  switch (action.type) {
    case "LOADING":
      return { ...state, employerLoading: true };

    case "READ_EMPLOYER":
      return {
        ...state,
        employer: [...action.employers],
        employerLoading: false,
      };

    case "CREATE_EMPLOYER":
      employers.push(action.shift);
      return { ...state, employer: employers, employerLoading: false };

    case "UPDATE_EMPLOYER":
      // grab shift using its index, maybe handle this differently
      const shiftToUpdate = employers[action.index];
      // do some updates
      employers.splice(action.index, 1, shiftToUpdate);
      return { ...state, employer: employers, employerLoading: false };

    case "DELETE_EMPLOYER":
      employers.splice(action.index, 1);
      return { ...state, employer: employers, employerLoading: false };

    // TODO: double check this
    case "ERROR":
      return { ...state, error: action.errorMessage };

    default:
      return state;
  }
};
