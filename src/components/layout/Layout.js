import React from "react";
import stayles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div >
      <MainNavigation />
      <main className={stayles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
