import Header from "./components/HeaderComponent/Header";
import Result from "./components/ResultComponent/Result";
import SideBar from "./components/SidebarComponent/SideBar";
import Actions from "./components/ActionsComponent/Actions";

function App() {
  return (
    <>
      <div
        className="relative grid h-screen w-full gap-0 overflow-hidden"
        style={{
          gridTemplateAreas: `
               "sidebar result search-settings search-settings search-settings"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
               "sidebar result textarea textarea actions"
             `,
          gridTemplateColumns: "270px 290px 1fr 1fr 270px",
          gridTemplateRows: "auto 1fr 1fr 1fr 1fr",
        }}
      >
        <div
          className="overflow-y-auto border-r border-gray-300"
          style={{ gridArea: "sidebar" }}
        >
          <div>
            <SideBar />
          </div>
        </div>

        <div className="overflow-y-auto" style={{ gridArea: "result" }}>
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
          <div className="mb-4 border-b border-gray-300 px-4 py-2">
            <h1 className="text-xl font-semibold">Title of the Note</h1>
            <p className="py-2">Tags</p>
            <p className="py-2">Status</p>
            <p className="py-2">Last Edited: Now</p>
          </div>
          <div className="border-b border-gray-300 py-2">
            <textarea
              autoFocus
              className="w-full overflow-x-scroll lg:h-[430px] 2xl:h-[540px]"
            />
          </div>
          <div className="py-2">
            <button className="mt-1 cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white">
              Save Note
            </button>
          </div>
        </div>

        <div className="overflow-hidden p-4" style={{ gridArea: "actions" }}>
          <Actions />
        </div>
      </div>
      <style jsx>{`
        :root {
          --search-settings-height: 75px;
        }
      `}</style>
    </>
  );
}

export default App;
