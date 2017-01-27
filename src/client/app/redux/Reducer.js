import { GET_USERS,
         GET_WIDGETS,
         GET_ONE_USER,
         GET_ONE_WIDGET,
         EDIT_WIDGET,
         UPDATE_WIDGET,
        } from './Actions'

const INITIAL_STATE ={
  users: [],
  widgets: [],
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.data
      }
    case GET_WIDGETS:
      return {
        ...state,
        widgets: action.payload.data
      }
    case GET_ONE_USER:
      return {
        ...state,
        users: action.payload
      }
    case GET_ONE_WIDGET:
      return {
        ...state,
        widgets: action.payload
      }
    default:
      return state
  }
}
