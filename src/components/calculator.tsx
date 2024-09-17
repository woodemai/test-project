"use client";
import { useState } from "react";
import CalculatorButton, {
  CalculatorButtonProps,
} from "./calculator/calc-button";

const buttons: CalculatorButtonProps[] = [
  {
    children: "C",
    color: "calcSecondary",
  },
  {
    children: "±",
    color: "calcSecondary",
  },
  {
    children: "%",
    color: "calcSecondary",
  },
  {
    children: "÷",
    color: "calcPrimary",
  },
  {
    children: "7",
  },
  {
    children: "8",
  },
  {
    children: "9",
  },
  {
    children: "×",
    color: "calcPrimary",
  },
  {
    children: "4",
  },
  {
    children: "5",
  },
  {
    children: "6",
  },
  {
    children: "-",
    color: "calcPrimary",
  },
  {
    children: "1",
  },
  {
    children: "2",
  },
  {
    children: "3",
  },
  {
    children: "+",
    color: "calcPrimary",
  },
  {
    children: ".",
  },
  {
    children: "0",
  },
  {
    children: "⌫",
  },
  {
    children: "=",
    color: "calcPrimary",
  },
];

const Calculator = () => {
  const [value, setValue] = useState("0");

  const onClick = (newValue: string) => {
    if(value === '0') {
        setValue(newValue)
    }else {
        setValue(prev => `${prev} ${newValue}`)
    }
  }

  return (
    <div className="w-fit rounded-lg bg-gray-100 p-4 shadow-sm">
      <div className="text-right w-full p-4 font-light text-5xl">
        <h2>{value}</h2>
      </div>
      <div className="grid w-fit grid-cols-4 gap-2">
        {buttons.map(({ children, color }) => (
          <CalculatorButton onClick={onClick} color={color} key={children?.toString()}>
            {children}
          </CalculatorButton>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
