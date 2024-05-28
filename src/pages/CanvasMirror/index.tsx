import { useEffect, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "./index.css";
import useSyncState from "../../hooks/useSyncState";
import { MY_CANVAS_BROADACAST_CHANNEL } from "../../constants";

function CanvasMirror() {
  const [canvasData] = useSyncState(MY_CANVAS_BROADACAST_CHANNEL, "");
  const canvasRef = useRef<CanvasDraw>(null);

  useEffect(() => {
    if (!canvasData) return;

    canvasRef?.current?.loadSaveData(canvasData, true);
  }, [canvasData]);
  return (
    <>
      <CanvasDraw
        ref={canvasRef}
        canvasWidth={window.innerWidth}
        canvasHeight={window.innerHeight}
        lazyRadius={0}
        brushRadius={0}
        disabled
        className="canvas-mirror-container"
      />
    </>
  );
}

export default CanvasMirror;
