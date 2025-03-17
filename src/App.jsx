// App.jsx
import React from "react";
import DesktopLayout from "./DesktopLayoutComponent/DesktopLayout";

function App() {
  return (
    <>
      <div className="hidden md:hidden lg:block">
        <DesktopLayout />
      </div>
    </>
  );
}

export default App;
