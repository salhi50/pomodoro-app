import * as Redux from "@reduxjs/toolkit"
import type {RootState} from "../store"
import { PhaseIndex } from "../../constants"

const currentPhaseSlice = Redux.createSlice({
  name: "currentPhase",
  initialState: PhaseIndex.Pomodoro,
  reducers: {
    set(_, action: Redux.PayloadAction<PhaseIndex>) {
      return action.payload
    },
  }
})

export const {set: setCurrentPhase} =  currentPhaseSlice.actions
export const {reducer: currentPhaseReducer} =  currentPhaseSlice
export const currentPhaseSelector = (state: RootState) => state.currentPhase
