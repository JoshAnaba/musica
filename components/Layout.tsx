import React from "react";
import Topbar from "./App/TopBar";
import Sidebar from "./App/SideBar";
import Musicbar from "./App/MusicBar";
const Layout = ({ children }: any) => {
  return (
    <div id="LAYOUT_CONTENT">
      <div id='MAIN_CONTENT'>
        <Sidebar />
        <div id="APP_CONTENT">
          <Topbar />
          <div id="CHILDREN">{children}</div>
        </div>
      </div>
      <Musicbar />
    </div>
  );
};
export default Layout;
