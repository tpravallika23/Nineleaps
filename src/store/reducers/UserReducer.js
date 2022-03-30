import {USER_DATA} from '../actions/UserActions';

const initialState = {
  userDetails: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      console.log('action.payload', action.payload);
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
