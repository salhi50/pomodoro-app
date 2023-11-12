import * as React from "react";
import Banner from "./layout/Banner";
import Aside from "./layout/Aside";
import Main from "./layout/Main";

const App: React.FC = () => {
  return <>
    <Banner />
    <div className="flex flex-wrap">
      <Aside />
      <Main />
    </div>
  </>
}

export default App;