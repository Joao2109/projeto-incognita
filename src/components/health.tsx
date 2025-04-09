import { F } from "@/types/file";
import { Input, InputField, InputGroup, InputTitle } from "./input";
interface HealthProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const Health = ({ fileData, setFileData }: HealthProps) => {
  return (
    <InputGroup className="flex flex-col md:flex-row gap-2">
      <InputGroup className="flex-1 flex flex-col sm:flex-row items-center gap-2 md:gap-6">
        <InputTitle className="flex-2 text-right">Saúde</InputTitle>
        <InputField
          className={`grid grid-cols-3 grid-rows-2 gap-2 bg-background ${
            fileData.saude > 3
              ? "border-accent"
              : fileData.saude > 1
              ? "border-amber-300"
              : "border-red-500"
          }`}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              type="checkbox"
              className="appearance-none w-6 h-6 border border-border rounded-full cursor-pointer checked:bg-radial from-30% from-destructive to-30% to-background"
              checked={6 - fileData.saude >= i + 1}
              onChange={(e) => {
                setFileData((prevState) => ({
                  ...prevState,
                  saude: e.target.checked ? 6 - i - 1 : 6 - i,
                }));
              }}
            />
          ))}
        </InputField>
      </InputGroup>
      <InputGroup className="flex-1 flex flex-col sm:flex-row-reverse items-center gap-2 md:gap-6">
        <InputTitle className="flex-2 text-left">Exaustão</InputTitle>
        <InputField
          className={`grid grid-cols-3 grid-rows-2 gap-2 bg-background ${
            fileData.exaustao > 3
              ? "border-accent"
              : fileData.exaustao > 1
              ? "border-amber-300"
              : "border-red-500"
          }`}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              type="checkbox"
              className="appearance-none w-6 h-6 border border-border rounded-full cursor-pointer checked:bg-radial from-30% from-destructive to-30% to-background"
              checked={6 - fileData.exaustao >= i + 1}
              onChange={(e) => {
                setFileData((prevState) => ({
                  ...prevState,
                  exaustao: e.target.checked ? 6 - i - 1 : 6 - i,
                }));
              }}
            />
          ))}
        </InputField>
      </InputGroup>
    </InputGroup>
  );
};

export default Health;
