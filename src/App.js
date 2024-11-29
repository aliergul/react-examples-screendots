import { useState } from "react";
import "./index.css";

function App() {
  const [dots, setDots] = useState([]);
  const [removedDots, setRemovedDots] = useState([]);

  const handleClick = (e) => {
    setDots((dots) => [
      ...dots,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
    setRemovedDots([]);
  };

  const handleBack = (e) => {
    e.stopPropagation();
    const tempDots = [...dots];
    const lastDot = tempDots.pop();
    setRemovedDots((data) => [...data, lastDot]);
    setDots(tempDots);
  };

  const handleForward = (e) => {
    e.stopPropagation();
    const tempRemoved = [...removedDots];
    const forwardItem = tempRemoved.pop();
    setDots((data) => [...data, forwardItem]);
    setRemovedDots(tempRemoved);
  };

  return (
    <div className="screen" onClick={(e) => handleClick(e)}>
      <div className="buttons">
        <button disabled={dots.length === 0} onClick={handleBack}>
          Geri
        </button>
        <button disabled={removedDots.length === 0} onClick={handleForward}>
          İleri
        </button>
      </div>

      {dots?.map((dot, i) => (
        <span
          key={i}
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
          }}
        />
      ))}
    </div>
  );
}

export default App;
