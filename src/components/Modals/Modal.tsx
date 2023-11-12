import * as React from "react";
import * as ReactDOM from "react-dom";
import ButtonIcon from "../Button/ButtonIcon";
import { XIcon } from "../../constants";

interface Props {
  title: string
  onClose?: () => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({title, onClose, children}) => {

  const closeButtonId = React.useId()

  React.useEffect(() => {
    document.getElementById(closeButtonId)?.focus();
    document.getElementById("root")?.setAttribute("aria-hidden", "true")
    document.getElementById("root")?.setAttribute("inert", "true")
    document.body.style.overflow = "hidden"
    
    return () => {
      document.getElementById("root")?.removeAttribute("aria-hidden")
      document.getElementById("root")?.removeAttribute("inert")
      document.body.style.removeProperty("overflow")
    }
  }, [])

  function handleKeyDown(e: React.KeyboardEvent) {
    if(e.key === "Escape" && typeof onClose === "function")
      onClose();
  }

  return ReactDOM.createPortal(
    <div className="bg-theme-900 fixed left-0 top-0 w-full h-full overflow-y-auto">
      <div
        className="p-16 max-w-lg mx-auto"
        role="dialog"
        aria-modal
        onKeyDown={handleKeyDown}
      >
        <div className="flex justify-between items-center mb-16">
          <div className="text-xl">{title}</div>
          <ButtonIcon
            Icon={XIcon}
            onClick={onClose}
            size="large"
            id={closeButtonId}
            aria-label="Close"
          />
        </div>
        {children}
      </div>
    </div>
  , document.body)
}

export default Modal;