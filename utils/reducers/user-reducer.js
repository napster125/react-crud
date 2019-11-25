export default function menuReducer(state, action) {
  // console.log(state, action);
  const { type, results } = action;
  switch (type) {
    case "init":
      return {
        ...state
      };
    case "login-success":
      const { data } = results;
      return {
        ...state,
        detail: data.user,
        preference: data.preference
      };
    default:
      throw new Error();
  }
}
