import { F } from "@/types/file";
import { Label } from "@radix-ui/react-dropdown-menu";
import { InputGroup, InputTitle, InputField, Input } from "./input";
interface PersonalDataProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const PersonalData = ({ fileData, setFileData }: PersonalDataProps) => {
  return (
    <>
      <InputGroup>
        <InputTitle>Dados pessoais</InputTitle>
        <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-3 p-2">
          <InputField>
            <Label className="h-6">Nome</Label>
            <Input
              className="h-8"
              type="text"
              value={fileData.nome}
              onChange={(e) =>
                setFileData({ ...fileData, nome: e.target.value })
              }
            />
          </InputField>
          <InputField>
            <Label className="h-6">Jogador</Label>
            <Input
              className="h-8"
              type="text"
              value={fileData.jogador}
              onChange={(e) =>
                setFileData({ ...fileData, jogador: e.target.value })
              }
            />
          </InputField>
          <InputField>
            <div className="flex">
              <Label className="h-6 flex-1">Perfil</Label>
              <Input
                className="w-6 h-6 appearance-none border border-border rounded-md checked:bg-primary"
                type="checkbox"
                checked={fileData.perfil.descoberto}
                onChange={(e) =>
                  setFileData((prevState) => ({
                    ...prevState,
                    perfil: {
                      ...prevState.perfil,
                      descoberto: e.target.checked,
                    },
                  }))
                }
              />
            </div>
            <Input
              className="h-8"
              type="text"
              value={fileData.perfil.nome}
              onChange={(e) =>
                setFileData((prevState) => ({
                  ...prevState,
                  perfil: { ...prevState.perfil, nome: e.target.value },
                }))
              }
            />
          </InputField>
          <InputField>
            <div className="flex">
              <Label className="h-6 flex-1">Complemento</Label>
              <Input
                className="w-6 h-6 appearance-none border border-border rounded-md checked:bg-primary"
                type="checkbox"
                checked={fileData.complemento.descoberto}
                onChange={(e) =>
                  setFileData((prevState) => ({
                    ...prevState,
                    complemento: {
                      ...prevState.complemento,
                      descoberto: e.target.checked,
                    },
                  }))
                }
              />
            </div>
            <Input
              className="h-8"
              type="text"
              value={fileData.complemento.nome}
              onChange={(e) =>
                setFileData((prevState) => ({
                  ...prevState,
                  complemento: {
                    ...prevState.complemento,
                    nome: e.target.value,
                  },
                }))
              }
            />
          </InputField>
        </div>
      </InputGroup>
      <InputGroup>
        <InputTitle>Personalidade</InputTitle>
        <InputGroup className="flex flex-col md:flex-row p-2 gap-2">
          <InputField className="flex-1">
            <Input />
          </InputField>
          <InputField className="flex-1">
            <Input />
          </InputField>
          <InputField className="flex-1">
            <Input />
          </InputField>
        </InputGroup>
      </InputGroup>
    </>
  );
};

export default PersonalData;
