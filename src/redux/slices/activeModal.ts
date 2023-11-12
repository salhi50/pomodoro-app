import * as Redux from "@reduxjs/toolkit"
import type {RootState} from "../store"
import { ActiveModal } from "../../types"

const activeModalSlice = Redux.createSlice({
  name: "activeModal",
  initialState: null as ActiveModal,
  reducers: {
    set(_, action: Redux.PayloadAction<ActiveModal>) {
      return action.payload
    }
  }
})

export const {set: setActiveModal} =  activeModalSlice.actions
export const {reducer: activeModalReducer} =  activeModalSlice
export const activeModalSelector = (state: RootState) => state.activeModal
