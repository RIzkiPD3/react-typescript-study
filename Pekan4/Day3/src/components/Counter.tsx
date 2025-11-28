import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card className="max-w-md mx-auto mt-10 shadow-lg border rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold tracking-wide">
          Counter App
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-center py-4">
          <span className="text-5xl font-extrabold text-blue-600 drop-shadow-sm">
            {count}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex justify-center gap-4 w-full">
          <Button
            className="px-5 py-2 text-lg font-bold"
            variant="secondary"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>

          <Button
            className="px-6 py-2 text-lg font-bold"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>

          <Button
            variant="outline"
            className="px-6 py-2 text-lg font-bold hover:bg-blue-200"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            +5
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
