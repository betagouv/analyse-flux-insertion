import { push } from "@socialgouv/matomo-next"

const devMode = process.env.NODE_ENV == 'development'

function initReducer(items) {
  return items || []
}

function reducerFactory(logName) {
  return function reducer(state, action) {
    switch (action.type) {
      case 'append':
        let data = {...action.item, seed: undefined}
        if (devMode) {
          console.log(data)
        }
        push(['trackEvent', logName, JSON.stringify(data)])
        return [action.item, ...state]
      case 'reset':
        return initReducer(action.items)
      default:
        throw new Error()
    }
  }
}

export {
  initReducer,
  reducerFactory
}
