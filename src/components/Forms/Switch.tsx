import * as React from "react";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch: React.FC<SwitchProps> = ({...props}) => {
  return (
    <div className="switch">
      <input type="checkbox" role="switch" {...props}/>
      <div className="track"></div>
      <div className="thumb"></div>
    </div>
  )
}

export default Switch;