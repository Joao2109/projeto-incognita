import { InputField, Label, Input } from "@/components/input";
import { F } from "@/types/file";
import Attributes from "./attributes";
import PersonalData from "./personal-data";
import Modifiers from "./modifiers";
import Competences from "./competences/index";
import Burdens from "./burdens/index";
import Health from "./health";
import Connections from "./connections";
import Inventory from "./inventory";
interface FileProps {
  className?: string;
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const File = ({ className, fileData, setFileData }: FileProps) => {
  return (
    <div
      className={`${
        className ?? ""
      }w-full max-w-[210mm] border border-muted rounded-2xl p-2`}
    >
      <InputField className="w-16 sm:w-24 md:w-[122px] h-16 sm:h-24 md:h-[122px] aspect-square m-2">
        <Label className="text-center text-xs sm:text-sm md:text-lg">
          Destino
        </Label>
        <Input
          className="text-center text-2xl sm:text-4xl md:text-6xl"
          type="number"
          value={fileData.destino}
          onChange={(e) =>
            setFileData({ ...fileData, destino: Number(e.target.value) })
          }
          min={0}
        />
      </InputField>
      <PersonalData fileData={fileData} setFileData={setFileData} />
      <Attributes fileData={fileData} setFileData={setFileData} />
      <Modifiers fileData={fileData} setFileData={setFileData} />
      <Competences fileData={fileData} setFileData={setFileData} />
      <Health fileData={fileData} setFileData={setFileData} />
      <Burdens fileData={fileData} setFileData={setFileData} />
      <Connections fileData={fileData} setFileData={setFileData} />
      <Inventory fileData={fileData} setFileData={setFileData} />
    </div>
  );
};

export default File;
