import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showCloseMd:false
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    switchModal: (state) => {
        state.showCloseMd = !state.showCloseMd
    }
  }
});

export const { switchModal } = modalSlice.actions;

export const selectModal = (state) => state.modal.showCloseMd;

export default modalSlice.reducer;
