import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: null,
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.address = null;
    },
    setUserData: (state, action) => {
      state.address = action.payload.address;
    },
  },
});

export const { clearUser, setUserData } = userAuthSlice.actions;
export default userAuthSlice.reducer;
