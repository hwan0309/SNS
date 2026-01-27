import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { toast, Toaster } from "sonner";

function App() {
  const isActive = false;
  return (
    <div className="p-5">
      <Toaster />
      <Textarea placeholder="입력" />
      <Input placeholder="입력" />
      <Button
        onClick={() => {
          toast("토스트 메세지", {
            position: "top-center",
          });
        }}
      >
        button
      </Button>
      <Button variant={"destructive"}>button</Button>
      <Button variant={"ghost"}>button</Button>
      <Button variant={"link"}>button</Button>
      <Button variant={"outline"}>button</Button>
      <Button variant={"secondary"}>button</Button>
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
