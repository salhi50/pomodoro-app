import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode
}

const TabList: React.FC<Props> = ({children, ...props}) => {
  return (
    <div
      className="border-b border-white flex"
      children={children}
      role="tablist"
      {...props}
    />
  )
}

export default TabList;