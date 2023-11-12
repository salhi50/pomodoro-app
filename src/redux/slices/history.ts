import * as Redux from "@reduxjs/toolkit"
import type {RootState} from "../store"
import { HistoryRow } from "../../types"

const historySlice = Redux.createSlice({
  name: "history",
  initialState: [] as HistoryRow[],
  reducers: {
    push(state, action: Redux.PayloadAction<HistoryRow>) {
      state.push(action.payload)
    }
  }
})

export const {push: pushToHistory} =  historySlice.actions
export const {reducer: historyReducer} =  historySlice
export const historySelector = (state: RootState) => state.history
