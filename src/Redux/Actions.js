export const signUpuser = (state, action) => {
  let { Users } = state;
  Users = [...Users, action.payload];
  return { ...state, Users };
};
