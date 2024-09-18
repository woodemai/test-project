"use client";
import { useState } from "react";
import CalculatorButton from "./calculator/calc-button";

const Calculator = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-fit rounded-lg bg-gray-100 p-4 shadow-sm">
      <div className="w-full min-w-20 p-4 text-right text-5xl font-light">
        <h2>{value}</h2>
      </div>
      <div className="grid w-fit grid-cols-4 gap-2">
        <CalculatorButton onClick={() => setValue("")} color="calcSecondary">
          C
        </CalculatorButton>
        <CalculatorButton
          onClick={() => setValue((prev) => `-${prev}`)}
          color="calcSecondary"
        >
          ±
        </CalculatorButton>
        <CalculatorButton
          onClick={() => setValue((prev) => prev + "%")}
          color="calcSecondary"
        >
          %
        </CalculatorButton>
        <CalculatorButton
          onClick={() => setValue((prev) => prev + "/")}
          color="calcPrimary"
        >
          ÷
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "7")}>
          7
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "8")}>
          8
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "9")}>
          9
        </CalculatorButton>
        <CalculatorButton
          onClick={() => setValue((prev) => prev + "*")}
          color="calcPrimary"
        >
          ×
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "4")}>
          4
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "5")}>
          5
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "6")}>
          6
        </CalculatorButton>
        <CalculatorButton
          onClick={() => setValue((prev) => prev + "-")}
          color="calcPrimary"
        >
          -
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "1")}>
          1
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "2")}>
          2
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "3")}>
          3
        </CalculatorButton>
        <CalculatorButton
          onClick={() => setValue((prev) => prev + "+")}
          color="calcPrimary"
        >
          +
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + ".")}>
          .
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev + "0")}>
          0
        </CalculatorButton>
        <CalculatorButton onClick={() => setValue((prev) => prev.slice(0, -1))}>
          ⌫
        </CalculatorButton>
        <CalculatorButton
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          onClick={() => setValue((prev) => eval(prev))}
          color="calcPrimary"
        >
          =
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;
