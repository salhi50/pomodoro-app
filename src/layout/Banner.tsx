import * as React from "react";
import Button from "../components/Button/Button";
import { HistoryIcon, MenuIcon, SettingsIcon } from "../constants";
import Logo from "../components/Logo";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { activeModalSelector, setActiveModal } from "../redux/slices/activeModal";
import SettingsModal from "../components/Modals/SettingsModal";
import HistoryModal from "../components/Modals/HistoryModal";
import { toggleAsideVisibility } from "../redux/slices/asideVisibility";

const Banner: React.FC = () => {
  const activeModal = useAppSelector(activeModalSelector)
  const dispatch = useAppDispatch()
  return (
    <header
      role="banner"
      className="bg-theme-700 py-8 px-16 flex items-center space-x-8"
    >
      <Button
        LeadingIcon={MenuIcon}
        onClick={() => dispatch(toggleAsideVisibility())}
        aria-label="Toggle aside"
      />
      <div className="flex-1">
        <Logo />
      </div>
      <Button
        label="History"
        LeadingIcon={HistoryIcon}
        hideLabelOnSmallScreens
        id="history-modal-trigger"
        onClick={() => dispatch(setActiveModal("history"))}
      />
      <Button
        label="Settings"
        LeadingIcon={SettingsIcon}
        hideLabelOnSmallScreens
        id="settings-modal-trigger"
        onClick={() => dispatch(setActiveModal("settings"))}
      />
      {activeModal === "settings" && <SettingsModal />}
      {activeModal === "history" && <HistoryModal />}
    </header>
  )
}

export default Banner;