import { useState } from "react";
import Key from "./Key";

const Keyboard = () => {
  const keyboard = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    [
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "Enter",
    ],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["Control", "Null", "Alt", "Space", "Alt", "Null", "Menu", "Control"],
  ];

  let [val, setVal] = useState("");
  let [enter, setEnter] = useState("");
  let [isUpper, setIsUpper] = useState(false);

  const removeLastChar = () => {
    setVal(val.slice(0, -1));
  };

  const entered = () => {
    setEnter(val);
    setVal("");
  };

  const shift = () => {
    setIsUpper(true);
  };

  return (
    <div className="keyboard-container">
      <div
        style={{
          background: "white",
          width: "34rem",
          height: "3rem",
          borderRadius: "5px",
          padding: "2px 4px",
          marginBottom: "10px",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {val}
      </div>
      
      {enter && <p className="entered-text">{enter}</p>}

      {keyboard.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key, keyIndex) => (
            <Key
              key={keyIndex}
              alphabet={key}
              setVal={setVal}
              isUpper={isUpper}
              setIsUpper={setIsUpper}
              removeLastChar={removeLastChar}
              entered={entered}
              shift={shift}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
