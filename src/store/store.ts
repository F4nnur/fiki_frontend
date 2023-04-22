import { configureStore } from "@reduxjs/toolkit";

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type GetState = typeof store["getState"];

export const store = configureStore({
  reducer: {

  } as const,
});
