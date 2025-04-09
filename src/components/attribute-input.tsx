import { useState, Dispatch, SetStateAction } from "react";
import { InputProps } from "./input";
interface AttributeInputProps extends InputProps {
  mod:
    | {
        causa: string;
        atributo: string[];
        valor: number;
      }[]
    | undefined;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}
export const AttributeInput = ({
  className,
  id,
  value,
  setValue,
  mod,
  ...props
}: AttributeInputProps) => {
  const [focus, setFocus] = useState(false);
  const modifiedValue =
    mod === undefined
      ? value
      : value + mod.reduce((sum, partialSum) => sum + partialSum.valor, 0);
  return (
    <input
      type="number"
      id={id}
      data-slot="attribute-input"
      className={`${className ?? ""} `}
      value={focus ? value : modifiedValue}
      onChange={(e) => setValue(Number(e.target.value))}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    />
  );
};
