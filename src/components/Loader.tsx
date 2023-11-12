import * as React from "react";
import { IconBaseProps } from "react-icons";
import { LoaderIcon } from "../constants";

const Loader: React.FC<IconBaseProps> = ({...props}) => {
  return <div>
    <div role="alert" className="sr-only">Loading</div>
    <LoaderIcon className="animate-spin" {...props} />
  </div>
}

export default Loader;