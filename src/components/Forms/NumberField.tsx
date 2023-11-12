import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const NumberField: React.FC<Props> = ({...props}) => {
  return (
    <input
      className="textfield rounded bg-theme-800 border border-theme-500 py-4 px-8 text-center w-64"
      type="number"
      placeholder="00"
      {...props}
    />
  )
}

export default NumberField;