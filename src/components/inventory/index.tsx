import { F } from "@/types/file";
import { InputField, InputGroup, InputTitle, TextArea } from "../input";
interface InventoryProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const Inventory = ({ fileData, setFileData }: InventoryProps) => {
  return (
    <InputGroup className="flex flex-col md:flex-row flex-wrap gap-2 justify-center">
      <InputGroup className="w-full md:w-5/12 h-auto">
        <InputTitle>Inventário</InputTitle>
        <InputField className="w-full h-72">
          <TextArea
            className="w-full h-full"
            value={fileData.inventario[0]}
            onChange={(e) => {
              setFileData((PrevState) => ({
                ...PrevState,
                inventario: [e.target.value],
              }));
            }}
          />
        </InputField>
      </InputGroup>
      <InputGroup className="w-full md:w-5/12 h-auto">
        <InputTitle>Recursos</InputTitle>
        <InputField className="w-full h-72">
          <TextArea
            className="w-full h-full"
            value={fileData.recursos[0]}
            onChange={(e) => {
              setFileData((PrevState) => ({
                ...PrevState,
                recursos: [e.target.value],
              }));
            }}
          />
        </InputField>
      </InputGroup>
      <InputGroup className="w-full md:w-10/12 h-auto">
        <InputTitle>Anotações</InputTitle>
        <InputField className="w-full h-72">
          <TextArea
            className="w-full h-full"
            value={fileData.anotacoes}
            onChange={(e) => {
              setFileData((PrevState) => ({
                ...PrevState,
                anotacoes: e.target.value,
              }));
            }}
          />
        </InputField>
      </InputGroup>
    </InputGroup>
  );
};

export default Inventory;
