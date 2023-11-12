import * as React from "react";
import Modal from "./Modal";
import FieldSet from "../Forms/FieldSet";
import FormGroup from "../Forms/FormGroup";
import Switch from "../Forms/Switch";
import NumberField from "../Forms/NumberField";
import { Settings } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { settingsSelector, updateSettings } from "../../redux/slices/settings";
import { CheckIcon, settingsRules, settingsRulesString } from "../../constants";
import { isNumber } from "../../utils";
import { setActiveModal } from "../../redux/slices/activeModal";
import useNotificationAPI from "../../hooks/useNotificationAPI";
import Alert from "../Alert";
import Button from "../Button/Button";

type InputValue = string | boolean
type Keys = keyof Settings

const SettingsModal: React.FC = () => {
  const settings = useAppSelector(settingsSelector)
  const dispatch = useAppDispatch()
  const updatesRef = React.useRef<{
    [key in Keys]?: InputValue
  }>({});
  const {status, requestPermission} = useNotificationAPI()
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let key = e.target.name;
    let value: InputValue = e.target.value;
    if(e.target.type === "checkbox") {
      value = e.target.checked
    }
    updatesRef.current = {...updatesRef.current, [key]: value}
  }

  function handleClose() {
    setTimeout(() => document.getElementById("settings-modal-trigger")?.focus(), 0);
    dispatch(setActiveModal(null))

    // Update settings
    const updates = updatesRef.current;
    const keys = Object.keys(updates) as Keys[]
    let newSettings: Partial<Settings> = {};

    if(keys.length === 0) return

    for(let key of keys) {
      const value = updates[key]
      switch(key) {
        case "autoStartBreaks":
        case "autoStartPomodoros":
          newSettings[key] = value as boolean
          break;
        case "longBreakDurationInSeconds":
        case "pomodoroDurationInSeconds":
        case "shortBreakDurationInSeconds":
          if(isNumber(value)) {
            // getting seconds
            const sec = parseFloat(value as string) * 60
            const min = settingsRules.durationInSeconds.min
            const max = settingsRules.durationInSeconds.max
            newSettings[key] = sec < min ? min : sec > max ? max : sec
          }
          break;
        case "longBreakInterval":
          if(isNumber(value)) {
            const num = parseFloat(value as string)
            const min = settingsRules.longBreakInterval.min
            const max = settingsRules.longBreakInterval.max
            newSettings[key] = num < min ? min : num > max ? max : num
          }
          break;
      }
    }

    dispatch(updateSettings(newSettings))
    updatesRef.current = {}
  }

  return (
    <Modal title="Settings" onClose={handleClose}>
      <FieldSet legend="General">
        <FormGroup
          label="Auto start breaks"
          Input={Switch}
          name="autoStartBreaks"
          defaultChecked={settings.autoStartBreaks}
          onChange={handleChange}
        />
        <FormGroup
          label="Auto start pomodoros"
          Input={Switch}
          name="autoStartPomodoros"
          defaultChecked={settings.autoStartPomodoros}
          onChange={handleChange}
        />
        <FormGroup
          label="Long break interval"
          Input={NumberField}
          name="longBreakInterval"
          defaultValue={settings.longBreakInterval}
          onChange={handleChange}
        />
      </FieldSet>

      <FieldSet legend="Duration(minutes)" info={settingsRulesString}>
        <FormGroup
          label="Pomodoro"
          Input={NumberField}
          name="pomodoroDurationInSeconds"
          defaultValue={settings.pomodoroDurationInSeconds / 60}
          onChange={handleChange}
        />
        <FormGroup
          label="Short break"
          Input={NumberField}
          name="shortBreakDurationInSeconds"
          defaultValue={settings.shortBreakDurationInSeconds / 60}
          onChange={handleChange}
        />
        <FormGroup
          label="Long break"
          Input={NumberField}
          name="longBreakDurationInSeconds"
          defaultValue={settings.longBreakDurationInSeconds / 60}
          onChange={handleChange}
        />
      </FieldSet>

      <FieldSet legend="Notifications">
        {status === "unavailable" && (
          <Alert description="Notification API is not supported or unavailable in this browser." />
        )}
        {status === "denied" && (
          <Alert description="You have blocked notifications. Please enable them in your browser settings." />
        )}
        {status === "granted" && (
          <div className="flex space-x-8 text-lg items-center">
            <CheckIcon aria-hidden />
            <span>Enabled</span>
          </div>
        )}
        {status === "default" && (
          <Button label="Request permission" onClick={requestPermission} />
        )}
      </FieldSet>
    </Modal>
  )
}

export default SettingsModal;