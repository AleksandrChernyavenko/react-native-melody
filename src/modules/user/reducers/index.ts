import { UserAction, UserActionTypes } from '../actions'
import UserState from '../interfaces/UserState'

type ReducerState = Readonly<UserState>

const initState = {
  username: 'Alex',
}

const user = (state: ReducerState = initState, action: UserAction): ReducerState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

export default user
