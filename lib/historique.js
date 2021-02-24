import { push } from "@socialgouv/matomo-next"

function initReducer() {
  return []
}

function reducerFactory(logName) {
  return function reducer(state, action) {
    switch (action.type) {
      case 'append':
        let data = {...action.item, seed: undefined}
        push(['trackEvent', logName, JSON.stringify(data)])
        return [action.item, ...state]
      case 'reset':
        return initReducer()
      default:
        throw new Error()
    }
  }
}

export {
  initReducer,
  reducerFactory
}
