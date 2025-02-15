import Logo from "./Components/LogoComponent/Logo";

function App() {
  return (
    <>
      <div className="px-4 pt-4 sm:px-4 md:px-8 lg:px-8 grid grid-cols-8 md:grid-cols-8 lg:grid-cols-12 gap-[24px] w-full">
        <Logo />
      </div>
    </>
  );
}

export default App;
