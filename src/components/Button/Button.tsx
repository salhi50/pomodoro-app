import * as React from "react";
import classNames from "classnames";
import { IconType } from "react-icons";
import Loader from "../Loader";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large" | "x-large"
  variant?: "primary" | "secondary"
  LeadingIcon?: IconType
  label?: string
  hideLabelOnSmallScreens?: boolean
  loading?: boolean
}

const Button: React.FC<Props> = ({
  size = "medium",
  variant = "secondary",
  LeadingIcon,
  label,
  hideLabelOnSmallScreens = false,
  className,
  disabled,
  onClick,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={classNames({
        "btn space-x-8 rounded relative active:shadow-none active:top-btn-y-shadow": true,
        "py-4 px-8": size === "small",
        "py-8 px-16": size === "medium",
        "py-12 px-18 ds:py-16 ds:px-24 text-xl": size === "large",
        "py-18 px-24 ds:py-24 ds:px-32 text-xl": size === "x-large",
        "btn-primary": variant === "primary",
        "btn-secondary": variant === "secondary",
        [className!]: className
      })}
      onClick={loading ? undefined : onClick}
      disabled={loading || disabled ? true : undefined}
      {...props}
    >
      {loading ? <Loader /> : <>
        {LeadingIcon && <LeadingIcon aria-hidden />}
        {label && (
          <span className={hideLabelOnSmallScreens ? "hidden ds:inline" : undefined}>
            {label}
          </span>
        )}
      </>}
    </button>
  )
}

export default Button;