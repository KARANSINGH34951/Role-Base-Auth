import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload; 
    },
    resetUser: () => initialState, 
  }
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
