import { ReactNode } from "react";
import { Button } from "../ui/button";

export type CalculatorButtonProps = {
  children: ReactNode;
  color?: "calcPrimary" | "calcSecondary" | "calcDefault";
  onClick?: (newValue: string) => void;
};

const CalculatorButton = ({
  onClick,
  children,
  color = "calcDefault",
}: CalculatorButtonProps) => {
  const onClicked = () => {
    if (onClick) {
      onClick(children?.toString() ?? "");
    }
  };
  return (
    <Button
      variant={color}
      onClick={onClicked}
      className="size-16 rounded-lg p-4 text-xl"
    >
      {children}
    </Button>
  );
};
export default CalculatorButton;
