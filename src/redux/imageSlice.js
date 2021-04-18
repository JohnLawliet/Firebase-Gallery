import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  image:null,
  file:null,
  title:null,
  fx:null
};


export const imageSlice = createSlice({
  name: 'image',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addImage: (state, action) => {
      state.image = action.payload
    },
    addFile: (state, action) => {
      state.file = action.payload
    },
    addFx: (state, action) => {
      state.fx = action.payload
    },
    addTitle: (state, action) => {
      state.title = action.payload
  }
  }
});

export const { addImage, addFile, addTitle, addFx } = imageSlice.actions;

export const selectImage = (state) => state.image.image;
export const selectFile = (state) => state.image.file;
export const selectTitle = (state) => state.image.title;
export const selectFx = (state) => state.image.fx;


export default imageSlice.reducer;
