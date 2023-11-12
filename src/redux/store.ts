import * as Redux from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import { asideVisibilityReducer } from "./slices/asideVisibility"
import { activeModalReducer } from "./slices/activeModal"
import { historyReducer } from "./slices/history"
import { settingsReducer } from "./slices/settings"
import { currentPhaseReducer } from "./slices/currentPhase"

const store = Redux.configureStore({
  reducer: {
    asideVisibility: asideVisibilityReducer,
    activeModal: activeModalReducer,
    history: historyReducer,
    settings: settingsReducer,
    currentPhase: currentPhaseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
