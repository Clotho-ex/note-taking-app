import Header from "./components/HeaderComponent/Header";
import Result from "./components/ResultComponent/Result";
import SideBar from "./components/SidebarComponent/SideBar";

function App() {
  return (
    <>
      <div
        className="relative grid h-screen w-full gap-0 overflow-y-hidden"
        style={{
          gridTemplateAreas: `
               "sidebar result search-settings search-settings search-settings"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
             `,
          gridTemplateColumns: "270px 290px 1fr 1fr 260px",
          gridTemplateRows: "auto 1fr 1fr 1fr 1fr",
        }}
      >
        {/* Sidebar */}
        <div
          className="border-r border-gray-300"
          style={{ gridArea: "sidebar" }}
        >
          <div>
            <SideBar />
          </div>
        </div>

        {/* Result - without border-r class */}
        <div style={{ gridArea: "result" }}>
          <div>
            <Result />
          </div>
        </div>

        {/* Search and Settings area */}
        <div
          className="flex items-center justify-end border-b border-gray-300 p-4"
          style={{ gridArea: "search-settings" }}
        >
          <Header />
        </div>

        {/* Text Area */}
        <div
          className="overflow-y-auto border-r border-gray-300 p-4"
          style={{ gridArea: "textarea" }}
        >
          <div className="h-full rounded-lg bg-neutral-100 p-4">Text Area</div>
        </div>

        {/* Actions */}
        <div className="overflow-y-auto p-4" style={{ gridArea: "actions" }}>
          <div className="h-full rounded-lg bg-neutral-100 p-4">Actions</div>
        </div>
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
