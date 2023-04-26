import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import SummariesSlice from "./reducers/SummariesSlice";

// export type AppDispatch = typeof store.dispatch;
// export type AppState = ReturnType<typeof store.getState>;
// export type GetState = typeof store["getState"];

export const store = configureStore({
  reducer:{
    user: UserSlice,
    summaries: SummariesSlice,
  }
});
