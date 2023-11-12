import * as React from "react";
import { ActiveAsideTab } from "../types";
import TabList from "../components/Tabs/TabList";
import TabItem from "../components/Tabs/TabItem";
import { MusicIcon, TasksIcon } from "../constants";
import { useAppSelector } from "../redux/store";
import { asideVisibilitySelector } from "../redux/slices/asideVisibility";
import classNames from "classnames";
import TabPanel from "../components/Tabs/TabPanel";
import TasksPanel from "../features/Tasks/TasksPanel";
import MusicPanel from "../features/Music/MusicPanel";

const Aside: React.FC = () => {
  const asideVisibility = useAppSelector(asideVisibilitySelector)
  const [activeTab, setActiveTab] = React.useState<ActiveAsideTab>("tasks")

  return (
    <aside 
      className={classNames({
        "w-full min-h-[calc(100vh-58px)] bg-theme-800 ds:w-[280px]": true,
        "hidden ds:block": asideVisibility,
        "block ds:hidden": !asideVisibility,
      })}
    >
      <TabList aria-label="Helpers">
        <TabItem
          LeadingIcon={TasksIcon}
          label="Tasks"
          active={activeTab === "tasks"}
          onClick={() => setActiveTab("tasks")}
          id="tasks-tab"
          aria-controls="tasks-panel"
        />
        <TabItem
          LeadingIcon={MusicIcon}
          label="Music"
          active={activeTab === "music"}
          onClick={() => setActiveTab("music")}
          id="music-tab"
          aria-controls="music-panel"
        />
      </TabList>
      <TabPanel
        show={activeTab === "tasks"}
        aria-labelledby="tasks-tab"
        id="tasks-panel"
      >
        <TasksPanel />
      </TabPanel>
      <TabPanel
        show={activeTab === "music"}
        aria-labelledby="music-tab"
        id="music-panel"
      >
        <MusicPanel />
      </TabPanel>
    </aside>
  )
}

export default Aside;