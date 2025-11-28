import MouseTracker from "./MouseTracker";

export default function ColoredTracker() {
  return (
    <MouseTracker>
      {({ x }) => (
        <div
          className="h-20 rounded-md flex items-center justify-center text-white font-bold"
          style={{
            backgroundColor: `rgb(${x % 255}, 100, 180)`
          }}
        >
          Dynamic Color Box
        </div>
      )}
    </MouseTracker>
  );
}
