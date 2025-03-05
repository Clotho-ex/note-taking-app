import { Delete, Import, Trash, Trash2 } from "lucide-react";
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
          <div className="h-full overflow-hidden rounded-lg bg-neutral-100 p-4">
            Text Area
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
