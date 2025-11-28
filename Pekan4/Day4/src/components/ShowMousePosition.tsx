import MouseTracker from "./MouseTracker";

export default function ShowMousePosition() {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <p className="text-lg font-semibold">
          Mouse Position: <span className="text-blue-600">({x} , {y})</span>
        </p>
      )}
    </MouseTracker>
  );
}
