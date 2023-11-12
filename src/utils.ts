import { PhaseIndex } from "./constants";
import { NotificationAPIStatus, Theme } from "./types";

export function formatSeconds(seconds: number) {
  let min = Math.floor(seconds / 60).toString().padStart(2, '0')
  let sec = (seconds % 60).toString().padStart(2, '0')
  return `${min}:${sec}`;
}

export function isNumber(str: any) {
  return str !== "Infinity" && str !== "-Infinity" && !isNaN(parseFloat(str))
}

export function getNotificationAPIStatus(): NotificationAPIStatus {
  if(!("Notification" in window))
    return "unavailable"

  return Notification.permission
}

export function getNextPhaseIndex(
  curr: PhaseIndex,
  pomodorosCount: number,
  longBreakInterval: number,
) {

  const {Pomodoro, ShortBreak, LongBreak} = PhaseIndex

  if(curr === Pomodoro) {
    if(pomodorosCount % longBreakInterval === 0) return LongBreak
    return ShortBreak
  }
  return Pomodoro

}

export function updateTheme(theme: Theme): void {
  document.documentElement.setAttribute(
    "data-theme",
    theme
  )
}