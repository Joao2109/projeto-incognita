import { F } from "@/types/file";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Plus, Equal, Minus } from "lucide-react";
import { InputGroup, InputTitle, InputField, Input } from "../input";
interface SecretProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const Secret = ({ fileData, setFileData }: SecretProps) => {
  return (
    <InputGroup>
      <InputTitle>Sigilo</InputTitle>
      {fileData.sigilo.map((s, i) => {
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
                value={s.descricao}
                onChange={(e) => {
                  const updatedSigilo = s;
                  updatedSigilo.descricao = e.target.value;
                  setFileData((prevState) => ({
                    ...prevState,
                    sigilo: [
                      ...prevState.sigilo.slice(0, i),
                      updatedSigilo,
                      ...prevState.sigilo.slice(i + 1),
                    ],
                  }));
                }}
              />
            </InputField>
            <Input
              type="checkbox"
              className="appearance-none w-8 h-8 bg-accent border border-border rounded-sm checked:bg-primary"
              checked={s.descoberto}
              onChange={(e) => {
                const updatedSigilo = s;
                updatedSigilo.descoberto = e.target.checked;
                setFileData((prevState) => ({
                  ...prevState,
                  sigilo: [
                    ...prevState.sigilo.slice(0, i),
                    updatedSigilo,
                    ...prevState.sigilo.slice(i + 1),
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

export default Secret;
