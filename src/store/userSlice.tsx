import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type User = {
  id: string;
  name: string;
};

const initialState: User = {
  id: "",
  name: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export default userSlice.reducer;
