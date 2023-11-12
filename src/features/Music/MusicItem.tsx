import * as React from "react";
import { Music, MusicStatus, NowPlayingMusic } from "../../types";
import Button from "../../components/Button/Button";
import { PauseIcon, PlayIcon, SoundWaveIcon } from "../../constants";
import Alert from "../../components/Alert";

interface Props {
  nowPlaying: NowPlayingMusic
  setNowPlaying: React.Dispatch<React.SetStateAction<NowPlayingMusic>>
  music: Music
}

const MusicItem: React.FC<Props> = ({nowPlaying,setNowPlaying, music}) => {
  const [status, setStatus] = React.useState<MusicStatus>("default");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if(nowPlaying && nowPlaying !== music.id) pause()
  }, [nowPlaying]);

  function play() {
    const audio = audioRef.current;
    if(audio) {
      audio.play().catch(() => setStatus("error"))
    }
  }

  function pause() {
    const audio = audioRef.current;
    if(audio) {
      audio.pause();
    }
  }

  function handleClick() {
    if(status === "default") setStatus("loading")
    else if(status === "paused") play()
    else pause()
  }

  function handlePlay() {
    setNowPlaying(music.id)
    setStatus("playing")
  }

  function handlePause() {
    setNowPlaying(null)
    setStatus("paused")
  }

  function handleError(e: React.SyntheticEvent<HTMLAudioElement>) {
    console.error(e);
    setNowPlaying(null)
    setStatus("error")
  }

  if(status === "error") {
    return (
      <li>
        <Alert description="Oops! Looks like there's an issue loading the music." />
      </li>
    )
  }

  return (
    <li className="flex items-center space-x-8">
      <Button
        LeadingIcon={status === "playing" ? PauseIcon : PlayIcon}
        onClick={handleClick}
        loading={status === "loading"}
        size="small"
        aria-label={status === "playing" ? "Pause": `Play ${music.title}`}
      />
      <span className="flex-1">{music.title}</span>
      {status === "playing" && <SoundWaveIcon aria-hidden />}
      {status !== "default" && (
        <audio
          loop
          ref={audioRef}
          hidden
          src={music.src}
          onError={handleError}
          onLoadedMetadata={() => play()}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      )}
    </li>
  )
}

export default MusicItem;