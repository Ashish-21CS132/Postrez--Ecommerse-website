import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartslice from './slices/Cartslice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
// import {thunk} from 'redux-thunk'
// import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cartslice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk]
})

export const persistor = persistStore(store)
