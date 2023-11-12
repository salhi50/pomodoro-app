import * as React from "react"

const useTimer = (initialSeconds: number | (() => number)) => {
  const [seconds, setSeconds] = React.useState(initialSeconds)
  const [isRunning, setIsRunning] = React.useState(false);
  const timerIdRef = React.useRef<number | undefined>()

  React.useEffect(() => {
    if(isRunning) {
      timerIdRef.current = window.setInterval(() => {
        setSeconds(s => s <= 0 ? 0 : s - 1)
        console.log("Running");
      },1000)
    }
    // Clear function
    return () => window.clearInterval(timerIdRef.current)
  }, [isRunning])

  function runTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setSeconds(initialSeconds)
    setIsRunning(false)
  }

  return {
    seconds,
    isRunning,
    runTimer,
    stopTimer,
    resetTimer
  }
}

export default useTimer