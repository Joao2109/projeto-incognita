import { F } from "@/types/file";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Plus, Equal, Minus } from "lucide-react";
import { InputGroup, InputTitle, InputField, Input } from "../input";
interface contactProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const Contact = ({ fileData, setFileData }: contactProps) => {
  return (
    <InputGroup>
      <InputTitle>Laço</InputTitle>
      {fileData.laco.map((l, i) => {
        return (
          <InputGroup key={i} className="flex items-center gap-2">
            <Label className="w-8 h-8 p-1 text-background bg-foreground rounded-full">
              {i === 0 ? (
                <Plus width={24} height={24} />
              ) : i === 1 ? (
                <Equal width={24} height={24} />
              ) : (
                <Minus width={24} height={24} />
              )}
            </Label>
            <InputField className="flex-1 h-8 px-2 py-1 rounded-sm">
              <Input
                type="text"
                className="w-full h-6 text-sm"
                value={l.descricao}
                onChange={(e) => {
                  const updatedLaco = l;
                  updatedLaco.descricao = e.target.value;
                  setFileData((prevState) => ({
                    ...prevState,
                    laco: [
                      ...prevState.laco.slice(0, i),
                      updatedLaco,
                      ...prevState.laco.slice(i + 1),
                    ],
                  }));
                }}
              />
            </InputField>
            <Input
              type="checkbox"
              className="appearance-none w-8 h-8 bg-accent border border-border rounded-sm checked:bg-primary"
              checked={l.descoberto}
              onChange={(e) => {
                const updatedLaco = l;
                updatedLaco.descoberto = e.target.checked;
                setFileData((prevState) => ({
                  ...prevState,
                  laco: [
                    ...prevState.laco.slice(0, i),
                    updatedLaco,
                    ...prevState.laco.slice(i + 1),
                  ],
                }));
              }}
            />
          </InputGroup>
        );
      })}
    </InputGroup>
  );
};

export default Contact;
