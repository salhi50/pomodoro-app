import classNames from "classnames";
import * as React from "react";
import { IconType } from "react-icons";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  LeadingIcon?: IconType
  label?: string
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const TabItem: React.FC<Props> = ({LeadingIcon, label, active, onClick, ...props}) => {
  return (
    <button
      className={classNames({
        "btn py-8 px-16 item space-x-8 flex-1": true,
        "selected": active
      })}
      onClick={onClick}
      role="tab"
      aria-selected={active}
      {...props}
    >
      {LeadingIcon && <LeadingIcon aria-hidden />}
      {label && <span>{label}</span>}
    </button>
  )
}

export default TabItem;