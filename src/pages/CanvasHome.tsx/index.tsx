import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.css";
import { Eraser, Undo } from "lucide-react";

function CanvasHome() {
  const [canvasData, setCanvasData] = useState("");
  const canvasRef = useRef<CanvasDraw>(null);
  return (
    <>
      <CanvasDraw
        onChange={(canvas) => {
          const data = canvas.getSaveData();
          console.log(data);
          setCanvasData(data);
          canvasRef?.current?.loadSaveData(data, true);
        }}
        canvasWidth={window.innerWidth}
        canvasHeight={window.innerHeight}
        lazyRadius={0}
      />
      <div className="top-section">
        <div className="toolbar">
          <div className="toolbar__item">
            <Undo />
            Undo
          </div>
          <div className="toolbar__divider" />
          <div className="toolbar__item">
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
