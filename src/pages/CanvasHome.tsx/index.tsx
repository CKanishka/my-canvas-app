import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.css";
import { Eraser, Undo } from "lucide-react";

function CanvasHome() {
  const [canvasData, setCanvasData] = useState("");
  const canvasRef = useRef<CanvasDraw>(null);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };
  return (
    <>
      <CanvasDraw
        ref={canvasRef}
        onChange={(canvas) => {
          const data = canvas.getSaveData();
          setCanvasData(data);
        }}
        canvasWidth={window.innerWidth}
        canvasHeight={window.innerHeight}
        lazyRadius={0}
      />
      <div className="top-section">
        <div className="toolbar">
          <div
            className="toolbar__item"
            role="button"
            onClick={() => handleUndo()}
          >
            <Undo />
            Undo
          </div>
          <div className="toolbar__divider" />
          <div
            className="toolbar__item"
            role="button"
            onClick={() => handleClear()}
          >
            <Eraser />
            Clear
          </div>
        </div>

        <p className="canvas-info">
          Start drawing on the canvas and visit the /mirror page to see a live
          mirrored version of your artwork.
        </p>
      </div>
    </>
  );
}

export default CanvasHome;
