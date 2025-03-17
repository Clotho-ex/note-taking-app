import React from "react";
import Header from "../components/HeaderComponent/Header";
import SideBar from "../components/SidebarComponent/SideBar";
import Result from "../components/ResultComponent/Result";
import Actions from "../components/ActionsComponent/Actions";
import TextArea from "../components/TextareaComponent/TextArea";

const DesktopLayout = () => {
  return (
    <>
      <div className="desktop-layout relative">
        <div
          className="overflow-y-scroll border-r border-gray-300"
          style={{ gridArea: "sidebar" }}
        >
          <SideBar />
        </div>

        <div className="overflow-y-scroll" style={{ gridArea: "result" }}>
          <Result />
        </div>

        <div
          className="flex items-center justify-end border-b border-gray-300 p-4"
          style={{ gridArea: "search-settings" }}
        >
          <Header />
        </div>

        <div
          className="overflow-hidden border-r border-gray-300 p-4"
          style={{ gridArea: "textarea" }}
        >
          <TextArea />
        </div>

        <div className="overflow-hidden p-4" style={{ gridArea: "actions" }}>
          <Actions />
        </div>
      </div>
    </>
  );
};

export default DesktopLayout;
