import { configureStore} from '@reduxjs/toolkit';
import imageReducer from './imageSlice';
import modalReducer from './modalSlice';
import extraReducer from './extraDetSlice'

// Augment middleware to consider Immutable.JS iterables serializable
// const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)

// const getEntries = (value) =>
//   Iterable.isIterable(value) ? value.entries() : Object.entries(value)

// const serializableMiddleware = createSerializableStateInvariantMiddleware({
//   isSerializable,
//   getEntries,
// })

export const store = configureStore({
  reducer: {
    image: imageReducer,
    modal: modalReducer,
    extra: extraReducer
  }
});
