import * as Redux from "@reduxjs/toolkit"
import type {RootState} from "../store"
import { Settings } from "../../types"
import { SETTINGS_LOCAL_STORAGE_KEY, defaultSettings } from "../../constants"

const settingsSlice = Redux.createSlice({
  name: "settings",
  initialState() {
    try {
      const LOCAL_CONFIG = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)
      if(LOCAL_CONFIG) return JSON.parse(LOCAL_CONFIG)
      return defaultSettings
    }catch(e) {
      console.error(e)
      return defaultSettings
    }
  },
  reducers: {
    update(state, action: Redux.PayloadAction<Partial<Settings>>) {
      return {...(state as Settings), ...action.payload}
    }
  }
})

export const {update: updateSettings} =  settingsSlice.actions
export const {reducer: settingsReducer} =  settingsSlice
export const settingsSelector = (state: RootState) => state.settings
