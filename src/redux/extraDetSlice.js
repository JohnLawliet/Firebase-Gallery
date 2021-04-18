import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  like:false
};


export const extraSlice = createSlice({
  name: 'extra',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    acceptReject: (state) => {
        state.like = !state.like
    }
  }
});

export const { acceptReject } = extraSlice.actions;

export const selectLike = (state) => state.extra.like;

export default extraSlice.reducer;
