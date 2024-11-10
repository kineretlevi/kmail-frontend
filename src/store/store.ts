import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contacts.slice';
import emailsReducer from './slices/emails.slice';
import uiReducer from './slices/ui.slice';
import pageReducer from './slices/page.slice';
import emailDetailsReducer from './slices/emailDetails.slice';


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    emails: emailsReducer,
    ui: uiReducer,
    page: pageReducer,
    emailDetails: emailDetailsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
