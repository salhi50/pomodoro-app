export type ActiveModal = "settings" | "history" | null

export interface HistoryRow {
  phaseName: Phase["name"]
  durationInSeconds: number
  status: Exclude<PhaseStatus, "pending">
}

export type PhaseStatus = "completed" | "skipped" | "pending"

export interface Settings {
  autoStartBreaks: boolean
  autoStartPomodoros: boolean
  longBreakInterval: number
  pomodoroDurationInSeconds: number
  shortBreakDurationInSeconds: number
  longBreakDurationInSeconds: number
}

export type Theme = "tomato" | "blue" | "green"

export interface Phase {
  name: "Pomodoro" | "Short Break" | "Long Break"
  reminderTitle: string
  theme: Theme
}

export type NotificationAPIStatus = NotificationPermission | "unavailable"

export type ActiveAsideTab = "tasks" | "music"

export interface Task {
  title: string
  id: string
  completed: boolean
}

export interface Music {
  title: string
  src: string
  id: string
}

export type NowPlayingMusic = Music["id"] | null

export type MusicStatus = "default" | "loading" | "playing" | "paused" | "error"

export type FullScreenAPIStaus = "unavailable" | "enabled" | "disabled"