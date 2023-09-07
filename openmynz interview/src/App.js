import "./styles.css";
import { useState } from "react";

export default function App() {
  const [mobileChecked, setMobileChecked] = useState(false);
  const [desktopChecked, setDesktopChecked] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);

  const mobileData = [
    "mobile1",
    "mobile2",
    "mobile3",
    "mobile4",
    "mobile5",
    "mobile6",
    "mobile7",
    "mobile8",
    "mobile9",
    "mobile10"
  ];

  const handleMobileClick = () => {
    setMobileChecked(!mobileChecked);
  };

  const handleDesktopClicked = () => {
    setDesktopChecked(!desktopChecked);
  };



  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="checkbox"
        name="Mobile"
        checked={mobileChecked}
        onClick={handleMobileClick}
      />
      Mobile
      <input
        type="checkbox"
        name="desktop"
        checked={desktopChecked}
        onClick={handleDesktopClicked}
      />
      Desktop
      <div>
        {mobileChecked && (
          <ul>
            {mobileData.slice(startIndex, lastIndex).map((mob, index) => (
              <li key={index}> {mob}</li>
            ))}
          </ul>
        )}
        {desktopChecked && (
          <ul>
            <li> Desktop 1</li>
            <li> Desktop 2</li>
            <li> Desktop 3</li>
            <li> Desktop 4</li>
            <li> Desktop 5</li>
            <li> Desktop 6</li>
            <li> Desktop 7</li>
            <li> Desktop 8</li>
            <li> Desktop 9</li>
            <li> Desktop 10</li>
            <li> Desktop 11</li>
            <li> Desktop 12</li>
            <li> Desktop 13</li>
            <li> Desktop 14</li>
            <li> Desktop 15</li>
            <li> Desktop 16</li>
            <li> Desktop 17</li>
            <li> Desktop 19</li>
            <li> Desktop 20</li>
          </ul>
        )}
      </div>
    </div>
  );
}
