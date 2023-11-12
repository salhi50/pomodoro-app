import {AiOutlineMenu, AiOutlineHistory, AiOutlineInfoCircle} from "react-icons/ai"
import {FaGear} from "react-icons/fa6"
import {IoWarningOutline} from "react-icons/io5"
import {MdTaskAlt} from "react-icons/md"
import {BiLoaderAlt} from "react-icons/bi"
import {BsXLg,BsSoundwave, BsFillSkipEndFill, BsCheck2, BsMusicNoteBeamed, BsFillPlayFill,BsFillPauseFill, BsFullscreen, BsFullscreenExit, BsArrowClockwise} from "react-icons/bs"
import { Music, Phase, Settings } from "./types"

// Icons
export const MenuIcon = AiOutlineMenu
export const HistoryIcon = AiOutlineHistory
export const SettingsIcon = FaGear
export const XIcon = BsXLg
export const SkipIcon = BsFillSkipEndFill
export const CheckIcon = BsCheck2
export const InfoIcon = AiOutlineInfoCircle
export const WarningIcon = IoWarningOutline
export const TasksIcon = MdTaskAlt
export const MusicIcon = BsMusicNoteBeamed
export const PlayIcon = BsFillPlayFill
export const PauseIcon = BsFillPauseFill
export const SoundWaveIcon = BsSoundwave
export const LoaderIcon = BiLoaderAlt
export const FullScreenIcon = BsFullscreen
export const FullScreenExitIcon = BsFullscreenExit
export const ResetIcon = BsArrowClockwise

export const defaultSettings: Settings = {
  autoStartBreaks: false,
  autoStartPomodoros: false,
  longBreakInterval: 4,
  pomodoroDurationInSeconds: 1500,
  shortBreakDurationInSeconds: 300,
  longBreakDurationInSeconds: 900,
}

export const SETTINGS_LOCAL_STORAGE_KEY = "settings"

export const settingsRules = {
  durationInSeconds: {
    min: 10,
    max: 59940 // 999 minutes
  },
  longBreakInterval: {
    min: 2,
    max: 99
  }
}

export const settingsRulesString = `
  Rules:
  Duration range: [10 seconds, 999 minutes]
  Long break interval range: [2, 99]
`

export const alarmSoundSrc = "https://cdn.pixabay.com/audio/2021/09/27/audio_91211934db.mp3"

export const TASKS_LOCAL_STORAGE_KEY = "tasks"

export const musics: Music[] = [
  {
    title: "Birds",
    src: "https://cdn.pixabay.com/audio/2022/02/10/audio_7a07ee0e79.mp3",
    id: "7a07ee0e79"
  },
  {
    title: "River",
    src: "https://cdn.pixabay.com/audio/2022/02/07/audio_6666f206aa.mp3",
    id: "6666f206aa"
  },
  {
    title: "Rain 1",
    src: "https://cdn.pixabay.com/audio/2022/04/13/audio_edfaa04900.mp3",
    id: "edfaa04900"
  },
  {
    title: "Rain 2",
    src: "https://cdn.pixabay.com/audio/2022/07/04/audio_f52a5754b1.mp3",
    id: "f52a5754b1"
  },
  {
    title: "Rain 3",
    src: "https://cdn.pixabay.com/audio/2022/05/17/audio_28d2030bd4.mp3",
    id: "28d2030bd4"
  },
  {
    title: "Waves 1",
    src: "https://cdn.pixabay.com/audio/2022/07/06/audio_bafec9fdb3.mp3",
    id: "bafec9fdb3"
  },
  {
    title: "Waves 2",
    src: "https://cdn.pixabay.com/audio/2021/08/09/audio_236f0d8d6b.mp3",
    id: "236f0d8d6b"
  },
]

export const phases: Phase[] = [
  {
    name: "Pomodoro",
    reminderTitle: "Time to focus!",
    theme: "tomato",
  },
  {
    name: "Short Break",
    reminderTitle: "Time to take a short break!",
    theme: "blue"
  },
  {
    name: "Long Break",
    reminderTitle: "Time to take a long break!",
    theme: "green"
  },
]

export enum PhaseIndex {
  Pomodoro = 0,
  ShortBreak = 1,
  LongBreak = 2
}