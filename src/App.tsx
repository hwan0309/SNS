import "./App.css";

function App() {
  return (
    <div>
      <div className="text-red text-xs">text-xs</div>
      <div className="text-sm text-[rgb(139,99,255)]">text-sm</div>
      <div className="text-[13px] font-bold">text-13px</div>

      <div className="bg-amber-500"> amber-500</div>

      <div className="h-20 w-full bg-blue-400">box</div>

      <div className="m-5 h-50 w-50 bg-red-400 py-5">
        <div className="h-full w-full bg-green-400"></div>
      </div>

      <div className="m-5 rounded-md border-2 border-red-500">border</div>

      <div className="flex flex-row items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </div>
  );
}

export default App;
