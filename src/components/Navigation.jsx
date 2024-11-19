import React from "react";
import Header from "./Header";
import Content from "./Content";

const Navigation = ({ leftIcon, routeName, routeBody }) => {
  return (
    <div className="flex flex-col w-full bg-white shadow-sm fixed top-0 left-0 z-10">
      <Header leftIcon={leftIcon} />
      <Content routeName={routeName} routeBody={routeBody} />
    </div>
  );
};

export default Navigation;
