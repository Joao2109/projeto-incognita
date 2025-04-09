import { F } from "@/types/file";
import { Input, InputField, InputGroup, Label, TextArea } from "./input";
import { Button } from "./ui/button";
interface BurdensProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const Burdens = ({ fileData, setFileData }: BurdensProps) => {
  return (
    <InputGroup className="flex flex-col md:flex-row gap-2">
      <InputGroup className="flex-1 flex flex-col">
        <Label className="text-center">Fardos</Label>
        <div className="max-h-60 sm:max-h-50 flex flex-col overflow-x-hidden overflow-y-auto">
          {fileData.fardos.map((fardo, i) => {
            return (
              <InputGroup
                key={i}
                className="h-25 flex flex-col sm:flex-row items-center"
              >
                <InputField className="flex-1 bg-background border-0">
                  <TextArea
                    value={fardo.descricao}
                    onChange={(e) => {
                      setFileData((prevState) => ({
                        ...prevState,
                        fardos: prevState.fardos.map((f, index) =>
                          index === i ? { ...f, descricao: e.target.value } : f
                        ),
                      }));
                    }}
                  />
                </InputField>
                <div className="flex sm:flex-col gap-4">
                  <Input
                    type="checkbox"
                    className="appearance-none w-6 h-6 checked:bg-primary rounded-sm border border-border"
                    checked={fardo.descoberto}
                    onChange={() => {
                      setFileData((prevState) => ({
                        ...prevState,
                        fardos: prevState.fardos.map((f, index) =>
                          index === i ? { ...f, descoberto: !f.descoberto } : f
                        ),
                      }));
                    }}
                  />
                  <Input
                    type="button"
                    className="w-6 h-6 text-white bg-destructive rounded-sm"
                    value="X"
                    readOnly
                    onClick={() => {
                      setFileData({
                        ...fileData,
                        fardos:
                          fileData.fardos.filter((f) => {
                            return fardo.id !== f.id;
                          }) || [],
                      });
                    }}
                  />
                </div>
              </InputGroup>
            );
          })}
        </div>
        <Button
          className="mt-2"
          onClick={() => {
            setFileData((prevState) => ({
              ...prevState,
              fardos: [
                ...prevState.fardos,
                {
                  id: prevState.fardos[prevState.fardos.length - 1].id + 1,
                  descricao: "",
                  descoberto: false,
                },
              ],
            }));
          }}
        >
          Adicionar Fardo
        </Button>
      </InputGroup>
      <InputGroup className="flex-1 flex flex-col">
        <Label className="text-center">Obsessões</Label>
        <div className="max-h-60 sm:max-h-50 flex flex-col overflow-x-hidden overflow-y-auto">
          {fileData.obsessoes.map((obsessao, i) => {
            return (
              <InputGroup
                key={i}
                className="h-25 flex flex-col sm:flex-row items-center"
              >
                <InputField className="flex-1 bg-background border-0">
                  <TextArea
                    value={obsessao.descricao}
                    onChange={(e) => {
                      setFileData((prevState) => ({
                        ...prevState,
                        obsessoes: prevState.obsessoes.map((o, index) =>
                          index === i ? { ...o, descricao: e.target.value } : o
                        ),
                      }));
                    }}
                  />
                </InputField>
                <div className="flex sm:flex-col gap-4">
                  <Input
                    type="checkbox"
                    className="appearance-none w-6 h-6 checked:bg-primary rounded-sm border border-border"
                    checked={obsessao.descoberto}
                    onChange={() => {
                      setFileData((prevState) => ({
                        ...prevState,
                        obsessoes: prevState.obsessoes.map((o, index) =>
                          index === i ? { ...o, descoberto: !o.descoberto } : o
                        ),
                      }));
                    }}
                  />
                  <Input
                    type="button"
                    className="w-6 h-6 text-white bg-destructive rounded-sm"
                    value="X"
                    readOnly
                    onClick={() => {
                      setFileData({
                        ...fileData,
                        obsessoes:
                          fileData.obsessoes.filter((o) => {
                            return obsessao.id !== o.id;
                          }) || [],
                      });
                    }}
                  />
                </div>
              </InputGroup>
            );
          })}
        </div>
        <Button
          className="mt-2"
          onClick={() => {
            setFileData((prevState) => ({
              ...prevState,
              obsessoes: [
                ...prevState.obsessoes,
                {
                  id: prevState.fardos[prevState.fardos.length - 1].id + 1,
                  descricao: `Obsessão`,
                  descoberto: false,
                },
              ],
            }));
          }}
        >
          Adicionar Obsessão
        </Button>
      </InputGroup>
    </InputGroup>
  );
};

export default Burdens;
