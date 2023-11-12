import * as React from "react";
import classNames from "classnames";
import {IconType} from "react-icons"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType
  size?: "default" | "large"
}

const ButtonIcon: React.FC<Props> = ({
  Icon,
  size = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={classNames({
        "btn rounded-circle item": true,
        "w-32 h-32": size === "default",
        "w-48 h-48 text-lg": size === "large",
        [className!]: className
      })}
      children={<Icon aria-hidden />}
      {...props}
    />
  )
}

export default ButtonIcon;