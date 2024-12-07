import { useState } from "react";
import { Button } from "@cicd-demo/ui";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold text-gray-900">CICD Demo</h1>
      <p className="text-xl text-gray-600">Count: {count}</p>
      <div className="space-x-4">
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>

        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="secondary" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
}
