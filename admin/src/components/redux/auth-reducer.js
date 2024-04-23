const LOGIN = "LOGIN";

let initialState = {
  username: "admin",
  password: "admin1234",
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      if (
        state.username === action.data.username &&
        state.password === action.data.password
      )
        return { ...state, isAuth: true };
      else {
        return { ...state, message: "svdgxyhsbj" };
      }
    }
    default:
      return state;
  }
};

export const login = (username, password) => ({
  type: LOGIN,
  data: { username, password },
});

export default authReducer;
