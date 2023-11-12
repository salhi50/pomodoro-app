import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  show?: boolean
  children: React.ReactNode
}

const TabPanel: React.FC<Props> = ({children, show = false, ...props}) => {
  return (
    <div
      hidden={!show}
      children={children}
      className="p-16"
      role="tabpanel"
      tabIndex={show ? 0 : -1}
      {...props}
    />
  )
}

export default TabPanel;