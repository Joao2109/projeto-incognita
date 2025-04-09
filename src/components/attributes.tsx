import { Label } from "@radix-ui/react-dropdown-menu";
import { AttributeInput } from "./attribute-input";
import { InputGroup, InputTitle, InputField } from "./input";
import { F } from "@/types/file";
import { Dispatch, SetStateAction } from "react";
interface AttributesProps {
  fileData: F;
  setFileData: Dispatch<SetStateAction<F>>;
}
const Attributes = ({ fileData, setFileData }: AttributesProps) => {
  return (
    <InputGroup>
      <InputTitle>Atributos</InputTitle>
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-2 sm:gap-0 p-2">
        <InputField className="w-16 sm:w-24 md:w-[122px] h-16 sm:h-24 md:h-[122px] aspect-square">
          <Label className="text-center text-xs sm:text-sm md:text-lg overflow-hidden overflow-ellipsis">
            Bravura
          </Label>
          <AttributeInput
            className="text-center text-2xl sm:text-4xl md:text-6xl"
            mod={fileData.modificadores.filter((m) => {
              return m.atributo.find((a) => a.toLowerCase() === "bravura");
            })}
            value={fileData.atributos.bravura}
            setValue={(v) => {
              setFileData((prevState) => ({
                ...prevState,
                atributos: { ...prevState.atributos, bravura: Number(v) },
              }));
            }}
            min={-1}
          />
        </InputField>
        <InputField className="w-16 sm:w-24 md:w-[122px] h-16 sm:h-24 md:h-[122px] aspect-square">
          <Label className="text-center text-xs sm:text-sm md:text-lg overflow-hidden overflow-ellipsis">
            Magnetismo
          </Label>
          <AttributeInput
            className="text-center text-2xl sm:text-4xl md:text-6xl"
            mod={fileData.modificadores.filter((m) => {
              return m.atributo.find((a) => a.toLowerCase() === "magnetismo");
            })}
            value={fileData.atributos.magnetismo}
            setValue={(v) => {
              setFileData((prevState) => ({
                ...prevState,
                atributos: { ...prevState.atributos, magnetismo: Number(v) },
              }));
            }}
            min={-1}
          />
        </InputField>
        <InputField className="w-16 sm:w-24 md:w-[122px] h-16 sm:h-24 md:h-[122px] aspect-square">
          <Label className="text-center text-xs sm:text-sm md:text-lg overflow-hidden overflow-ellipsis">
            Intelecto
          </Label>
          <AttributeInput
            className="text-center text-2xl sm:text-4xl md:text-6xl"
            mod={fileData.modificadores.filter((m) => {
              return m.atributo.find((a) => a.toLowerCase() === "intelecto");
            })}
            value={fileData.atributos.intelecto}
            setValue={(v) => {
              setFileData((prevState) => ({
                ...prevState,
                atributos: { ...prevState.atributos, intelecto: Number(v) },
              }));
            }}
            min={-1}
          />
        </InputField>
        <InputField className="w-16 sm:w-24 md:w-[122px] h-16 sm:h-24 md:h-[122px] aspect-square">
          <Label className="text-center text-xs sm:text-sm md:text-lg overflow-hidden overflow-ellipsis">
            Instinto
          </Label>
          <AttributeInput
            className="text-center text-2xl sm:text-4xl md:text-6xl"
            mod={fileData.modificadores.filter((m) => {
              return m.atributo.find((a) => a.toLowerCase() === "instinto");
            })}
            value={fileData.atributos.instinto}
            setValue={(v) => {
              setFileData((prevState) => ({
                ...prevState,
                atributos: { ...prevState.atributos, instinto: Number(v) },
              }));
            }}
            min={-1}
          />
        </InputField>
        <InputField className="w-16 sm:w-24 md:w-[122px] h-16 sm:h-24 md:h-[122px] aspect-square">
          <Label className="text-center text-xs sm:text-sm md:text-lg overflow-hidden overflow-ellipsis">
            Controle
          </Label>
          <AttributeInput
            className="text-center text-2xl sm:text-4xl md:text-6xl"
            mod={fileData.modificadores.filter((m) => {
              return m.atributo.find((a) => a.toLowerCase() === "controle");
            })}
            value={fileData.atributos.controle}
            setValue={(v) => {
              setFileData((prevState) => ({
                ...prevState,
                atributos: { ...prevState.atributos, controle: Number(v) },
              }));
            }}
            min={-1}
          />
        </InputField>
      </div>
    </InputGroup>
  );
};
export default Attributes;
