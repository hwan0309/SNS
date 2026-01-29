import { Button } from "@/components/ui/button";
import { useCountStor } from "@/sotre/count";

export default function CounterPage() {
  const { count, increase, decrease } = useCountStor();
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <div>{count}</div>
      <div>
        <Button onClick={decrease}>-</Button>
        <Button onClick={increase}>+</Button>
      </div>
    </div>
  );
}
