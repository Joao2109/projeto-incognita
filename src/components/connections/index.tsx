import { F } from "@/types/file";
import { InputGroup } from "../input";
import Contact from "./contact";
import Influence from "./influence";
import Secret from "./secret";
interface ConnectionsProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const Connections = ({ fileData, setFileData }: ConnectionsProps) => {
  return (
    <InputGroup className="flex flex-col gap-4">
      <Contact fileData={fileData} setFileData={setFileData} />
      <Influence fileData={fileData} setFileData={setFileData} />
      <Secret fileData={fileData} setFileData={setFileData} />
    </InputGroup>
  );
};

export default Connections;
