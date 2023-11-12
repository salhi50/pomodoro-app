import * as React from "react";
import { InfoIcon } from "../../constants";
import ButtonIcon from "../Button/ButtonIcon";

interface Props extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string
  info?: string
}

const FieldSet: React.FC<Props> = ({children, legend,info, ...props}) => {
  return (
    <fieldset className="mb-24" {...props}>
      <legend className="mb-8 flex items-center text-lg text-muted space-x-2">
        <span>{legend}</span>
        {info && (
          <ButtonIcon
            Icon={InfoIcon}
            onClick={() => alert(info)}
            aria-label="fieldset info"
          />
        )}
      </legend>
      {children}
    </fieldset>
  )
}

export default FieldSet;