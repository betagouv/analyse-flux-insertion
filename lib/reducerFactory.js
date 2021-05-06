import { push } from "@socialgouv/matomo-next";

const devMode = process.env.NODE_ENV == "development";

function initReducer(items) {
  return items || [];
}

function reducerFactory(logName) {
  return function reducer(state, action) {
    switch (action.type) {
      case "append":
        // we don't want to send the applicants personal data
        let { applicantsPersonalData, newApplicantsData, ...logData } = action.item;
        if (devMode) {
          console.log(logData);
        }
        push(["trackEvent", logName, JSON.stringify({ ...logData, seed: undefined })]);
        return [action.item, ...state];
      case "update":
        const elIndex = state.findIndex(el => el.seed === action.item.seed);
        state[elIndex] = { ...state[elIndex], ...action.item };
        return state;
      case "replace":
        return action.items;
      case "reset":
        return initReducer(action.items);
      default:
        throw new Error();
    }
  };
}

export { initReducer, reducerFactory };
