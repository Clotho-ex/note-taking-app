import Header from "./components/HeaderComponent/Header";
import Result from "./components/ResultComponent/Result";
import SideBar from "./Components/SidebarComponent/SideBar";

function App() {
  return (
    <>
      <div
        className="relative grid h-screen w-full gap-0"
        style={{
          gridTemplateAreas: `
               "sidebar result search-settings search-settings search-settings"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
             `,
          gridTemplateColumns: "240px 240px 1fr 1fr 240px",
          gridTemplateRows: "auto 1fr 1fr 1fr 1fr",
        }}
      >
        {/* Sidebar */}
        <div
          className="overflow-y-auto border-r border-gray-300"
          style={{ gridArea: "sidebar" }}
        >
          <SideBar />
        </div>

        {/* Result - without border-r class */}
        <div className="overflow-y-auto p-4" style={{ gridArea: "result" }}>
          <Result className="h-full rounded-lg bg-blue-500" />
        </div>

        {/* Search and Settings area */}
        <div
          className="flex items-center justify-end border-b border-gray-300 p-4"
          style={{ gridArea: "search-settings" }}
        >
          <Header className="text-gray-500" size={20} />
        </div>

        {/* Text Area */}
        <div
          className="overflow-y-auto border-r border-gray-300 p-4"
          style={{ gridArea: "textarea" }}
        >
          <div className="h-full rounded-lg bg-gray-300 p-4">Text Area</div>
        </div>

        {/* Actions */}
        <div className="overflow-y-auto p-4" style={{ gridArea: "actions" }}>
          <div className="h-full rounded-lg bg-gray-400 p-4">Actions</div>
        </div>

        {/* Custom partial border for the Result section */}
        <div
          className="absolute bg-gray-300"
          style={{
            left: "480px",
            width: "1px",
            height: "calc(100% - var(--search-settings-height))",
            top: "var(--search-settings-height)",
          }}
        ></div>
      </div>
      <style jsx>{`
        :root {
          --search-settings-height: 75px; /* Adjust this value based on your actual search-settings height */
        }
      `}</style>
    </>
  );
}

export default App;
