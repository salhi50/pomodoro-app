import * as React from "react";
import { WarningIcon } from "../constants";

interface Props {
  description: string
}

const Alert: React.FC<Props> = ({description}) => {
  return (
    <div
      role="alert"
      className="p-16 border border-white rounded flex space-x-8"
    >
      <WarningIcon aria-hidden size="1.375rem" className="self-start shrink-0" />
      <p>{description}</p>
    </div>
  )
}

export default Alert;