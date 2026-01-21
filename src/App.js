import { useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
  const [value, setValue] = useState("");
  const valueRef = useRef("");

  const add = (v) => {
    setValue((prev) => {
      const next = (prev === "Error" ? "" : prev) + v;
      valueRef.current = next;
      return next;
    });
  };

  const clear = () => {
    valueRef.current = "";
    setValue("");
  };

  const del = () => {
    setValue((prev) => {
      const next = prev.slice(0, -1);
      valueRef.current = next;
      return next;
    });
  };

  const calc = (expr) => {
    try {
      const result = Function(`"use strict"; return (${expr})`)();
      const next = String(result);
      valueRef.current = next;
      setValue(next);
    } catch {
      valueRef.current = "Error";
      setValue("Error");
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key;

      if ("0123456789.+-*/".includes(key)) add(key);

      if (key === "Enter") {
        e.preventDefault();
        calc(valueRef.current);
      }

      if (key === "Backspace") del();
      if (key === "Escape") clear();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+",
  ];

  return (
    <div className="wrap">
      <div className="calc">
        <div className="screen">{value || "0"}</div>

        <div className="top">
          <button onClick={clear} className="btn danger">C</button>
          <button onClick={del} className="btn del">DEL</button>
        </div>

        <div className="grid">
          {buttons.map((b) =>
            b === "=" ? (
              <button
                key={b}
                onClick={() => calc(valueRef.current)}
                className="btn equal"
              >
                =
              </button>
            ) : (
              <button key={b} onClick={() => add(b)} className="btn">
                {b}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
