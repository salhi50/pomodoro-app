import * as React from "react";
import { NowPlayingMusic } from "../../types";
import { musics } from "../../constants";
import MusicItem from "./MusicItem";

const MusicPanel: React.FC = () => {
  const [nowPlaying, setNowPlaying] = React.useState<NowPlayingMusic>(null);

  return (
    <ul className="space-y-8">
      {musics.map(music => (
        <MusicItem
          key={music.id}
          music={music}
          nowPlaying={nowPlaying}
          setNowPlaying={setNowPlaying}
        />
      ))}
    </ul>
  )
}

export default MusicPanel;