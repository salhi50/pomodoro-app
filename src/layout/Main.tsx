import * as React from "react";
import fscreen from "fscreen"
import { useAppDispatch, useAppSelector } from "../redux/store";
import { currentPhaseSelector, setCurrentPhase } from "../redux/slices/currentPhase";
import { FullScreenIcon, PauseIcon, PhaseIndex, PlayIcon, ResetIcon, SETTINGS_LOCAL_STORAGE_KEY, SkipIcon, alarmSoundSrc, phases } from "../constants";
import Button from "../components/Button/Button";
import { settingsSelector } from "../redux/slices/settings";
import { formatSeconds, getNextPhaseIndex, updateTheme } from "../utils";
import useNotificationAPI from "../hooks/useNotificationAPI";
import { FullScreenAPIStaus, PhaseStatus } from "../types";
import { historySelector, pushToHistory } from "../redux/slices/history";
import useTimer from "../hooks/useTimer";

const Main: React.FC = () => {
  const currentPhaseIndex = useAppSelector(currentPhaseSelector);
  const settings = useAppSelector(settingsSelector)
  const history = useAppSelector(historySelector)
  const dispatch = useAppDispatch()
  const {status: notificationStatus, notify} = useNotificationAPI();
  const {seconds, isRunning, runTimer, stopTimer, resetTimer} = useTimer(getPhaseDuration);
  const alarmRef = React.useRef<HTMLAudioElement | null>(null)
  const [phaseStatus, setPhaseStatus] = React.useState<PhaseStatus>("pending")
  const [fullscreen, setFullscreen] = React.useState<FullScreenAPIStaus>("disabled")
  const pomodorosCount = React.useMemo(() => {
    return history.filter(row => row.phaseName === "Pomodoro").length
  }, [history])
  
  const currentPhase = phases[currentPhaseIndex]

  React.useEffect(() => {
    localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  React.useEffect(() => {
    if(fscreen.fullscreenElement === undefined) {
      setFullscreen("unavailable");
    } else {
      const update = () => setFullscreen(fscreen.fullscreenElement === null ? "disabled" : "enabled");
      update();
      fscreen.addEventListener("fullscreenchange", update)
      fscreen.addEventListener("fullscreenerror", () => {
        setFullscreen("unavailable")
      })
    }
  }, [])

  React.useEffect(() => {
    updateTheme(currentPhase.theme)
  }, [currentPhase])

  React.useEffect(() => {
    resetTimer();
  }, [
    settings.pomodoroDurationInSeconds,
    settings.longBreakDurationInSeconds,
    settings.shortBreakDurationInSeconds,
    currentPhaseIndex
  ])

  React.useEffect(() => {
    if(seconds <= 0) {
      setPhaseStatus("completed")
    }
  }, [seconds]);

  React.useEffect(() => {
    if(phaseStatus === "completed" || phaseStatus === "skipped") {
      let nextPhaseIndex = getNextPhaseIndex(
        currentPhaseIndex, 
        pomodorosCount + 1, 
        settings.longBreakInterval
      );

      // Auto start breaks or pomodoros
      if(nextPhaseIndex === PhaseIndex.Pomodoro && settings.autoStartPomodoros) 
        setTimeout(() => runTimer(),0)
      else if(nextPhaseIndex !== PhaseIndex.Pomodoro && settings.autoStartBreaks) 
        setTimeout(() => runTimer(),0)

      // Send notifications and play alarm sound
      if(phaseStatus === "completed") {
        if(notificationStatus === "granted") notify(phases[nextPhaseIndex].reminderTitle)
        alarmRef.current?.play()
      }

      // Updates
      dispatch(setCurrentPhase(nextPhaseIndex))
      dispatch(pushToHistory({
        durationInSeconds: getPhaseDuration(),
        phaseName: currentPhase.name,
        status: phaseStatus
      }))
      // Reset
      setPhaseStatus("pending")
    }
  }, [phaseStatus]);

  function getPhaseDuration() {
    switch(currentPhaseIndex) {
      case PhaseIndex.Pomodoro:
        return settings.pomodoroDurationInSeconds
      case PhaseIndex.ShortBreak:
        return settings.shortBreakDurationInSeconds
      case PhaseIndex.LongBreak:
        return settings.longBreakDurationInSeconds
      default:
        return 0
    }
  }

  return <main className="flex-1">
    <div className="py-8 px-16 flex justify-between items-center bg-theme-900">
      <div>
        <div className="text-lg" role="alert">{currentPhase.reminderTitle}</div>
        <div className="text-muted">{pomodorosCount} pomodoro(s) managed</div>
      </div>
      {fullscreen !== "unavailable" && (
        <Button
          LeadingIcon={FullScreenIcon}
          onClick={() => fullscreen === "enabled" ? (
            fscreen.exitFullscreen()
          ) : (
            fscreen.requestFullscreen(document.documentElement)
          )}
          aria-label="Toggle fullscreen"
        />
      )}
    </div>
    <div className="text-center py-32 px-16">
      <div className="text-display mb-32">
        {formatSeconds(seconds)}
      </div>
      <div className="flex space-x-16 items-center justify-center">
        <Button
          size="large"
          LeadingIcon={ResetIcon}
          onClick={resetTimer}
          aria-label="Reset timer"
        />
        <Button
          size="x-large"
          variant="primary"
          LeadingIcon={isRunning ? PauseIcon : PlayIcon}
          onClick={isRunning ? stopTimer : runTimer}
          aria-label={isRunning ? "Stop timer" : "Run timer"}
        />
        <Button
          size="large"
          LeadingIcon={SkipIcon}
          onClick={() => setPhaseStatus("skipped")}
          aria-label={`Skip ${currentPhase.name} phase`}
        />
      </div>
    </div>
    <audio hidden src={alarmSoundSrc} ref={alarmRef} />
  </main>
}

export default Main;