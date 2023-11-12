import * as Redux from "@reduxjs/toolkit"
import type {RootState} from "../store"

const asideVisibilitySlice = Redux.createSlice({
  name: "asideVisibility",
  initialState: true,
  reducers: {
    toggle: _ => !_
  }
})

export const {toggle: toggleAsideVisibility} =  asideVisibilitySlice.actions
export const {reducer: asideVisibilityReducer} =  asideVisibilitySlice
export const asideVisibilitySelector = (state: RootState) => state.asideVisibility