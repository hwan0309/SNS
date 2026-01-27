import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { toast, Toaster } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { Anvil } from "lucide-react";

function App() {
  const isActive = false;

  return (
    <div className="p-5">
      <Anvil className="h-12 w-12 text-red-500" />
      <AlertDialog>
        <AlertDialogTrigger>open Alert Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
          <div>body</div>
          <div>
            <AlertDialogAction
              onClick={() => {
                console.log("Open");
              }}
            >
              action
            </AlertDialogAction>
            <AlertDialogAction
              onClick={() => {
                console.log("Calcel");
              }}
            >
              cancel
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog>
        <DialogTrigger>open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div>body</div>
        </DialogContent>
      </Dialog>
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>content</PopoverContent>
      </Popover>
      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem>5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

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
