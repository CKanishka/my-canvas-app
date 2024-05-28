import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.css";

function CanvasMirror() {
  const [canvasData, setCanvasData] = useState("");
  const canvasRef = useRef<CanvasDraw>(null);

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
        disabled
      />
    </>
  );
}

export default CanvasMirror;
