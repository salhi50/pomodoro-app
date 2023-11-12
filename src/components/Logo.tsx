import * as React from "react";
import logo from "../../public/Logo_180x38.png"

const Logo: React.FC = () => {
  return (
    <img
      src={logo}
      alt="logo"
      width={180}
      height={38}
    />
  )
}

export default Logo;