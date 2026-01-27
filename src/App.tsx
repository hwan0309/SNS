import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

function App() {
  const isActive = false;
  return (
    <div>
      <Button>button</Button>
      <div
        className={cn("w-10 text-sm", isActive ? "text-primary" : "text-muted")}
      >
        cn
      </div>
      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

export default App;
