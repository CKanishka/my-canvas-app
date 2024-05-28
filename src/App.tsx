import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

function App() {
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
        hideGrid
      />
      {/* <CanvasDraw ref={canvasRef} disabled lazyRadius={0} hideGrid /> */}
    </>
  );
}

export default App;
