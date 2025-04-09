import { F } from "@/types/file";
import { Label } from "@radix-ui/react-dropdown-menu";
import { InputGroup, InputField, TextArea, Input } from "./input";
import { Button } from "./ui/button";
interface ModifiersProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}
const Modifiers = ({ fileData, setFileData }: ModifiersProps) => {
  return (
    <InputGroup className="max-h-96 overflow-y-auto">
      <h2 className="text-center font-semibold mt-2">Modificadores</h2>
      {fileData.modificadores.map((mod, i) => {
        return (
          <InputGroup
            className="flex flex-col min-[490px]:flex-row p-2 gap-2"
            key={i}
          >
            <InputField className="w-full min-[490px]:w-[calc(100% - 224px)] min-[490px]:h-24 h-16">
              <Label className="h-4 min-[490px]:h-6 text-center text-sm">
                Causa
              </Label>
              <TextArea
                className="h-6 min-[490px]:h-12 text-center"
                value={mod.causa}
                onChange={(e) => {
                  setFileData((prevState) => {
                    if (Array.isArray(prevState.modificadores)) {
                      return {
                        ...prevState,
                        modificadores: prevState.modificadores.map(
                          (modifier, index) =>
                            index === i
                              ? { ...modifier, causa: e.target.value }
                              : modifier
                        ),
                      };
                    }
                    return prevState;
                  });
                }}
              />
            </InputField>
            <div className="flex flex-col min-[380px]:flex-row gap-2 items-center">
              <InputField className="w-full min-[490px]:w-32 min-[380px]:h-24 h-16">
                <Label className="h-4 min-[380px]:h-6 text-center text-sm">
                  Atributos
                </Label>
                <Input
                  className="h-6 min-[380px]:h-12 text-center"
                  value={mod.atributo}
                  onChange={(e) => {
                    setFileData((prevState) => {
                      if (Array.isArray(prevState.modificadores)) {
                        return {
                          ...prevState,
                          modificadores: prevState.modificadores.map(
                            (modifier, index) =>
                              index === i
                                ? {
                                    ...modifier,
                                    atributo: [e.target.value],
                                  }
                                : modifier
                          ),
                        };
                      }
                      return prevState;
                    });
                  }}
                />
              </InputField>
              <div className="w-16 h-24 flex flex-col items-center gap-2">
                <InputField className="w-full h-16">
                  <Label className="h-4 text-center text-sm">Valor</Label>
                  <Input
                    className="h-6 text-center text-xl"
                    type="number"
                    value={mod.valor}
                    onChange={(e) => {
                      setFileData((prevState) => {
                        if (Array.isArray(prevState.modificadores)) {
                          return {
                            ...prevState,
                            modificadores: prevState.modificadores.map(
                              (modifier, index) =>
                                index === i
                                  ? {
                                      ...modifier,
                                      valor: Number(e.target.value),
                                    }
                                  : modifier
                            ),
                          };
                        }
                        return prevState;
                      });
                    }}
                  />
                </InputField>
                <Button
                  className="w-full h-6 text-foreground bg-muted hover:bg-muted border border-border cursor-pointer"
                  onClick={() => {
                    setFileData({
                      ...fileData,
                      modificadores:
                        fileData.modificadores.filter((m) => {
                          return (
                            mod.causa.toLowerCase() !== m.causa.toLowerCase()
                          );
                        }) || [],
                    });
                  }}
                >
                  X
                </Button>
              </div>
            </div>
          </InputGroup>
        );
      })}
      <Button
        className="w-full text-foreground bg-background hover:bg-accent mt-2 border border-border cursor-pointer"
        onClick={() => {
          setFileData((prevState) => ({
            ...prevState,
            modificadores: [
              ...prevState.modificadores,
              {
                causa: `Causa ${fileData.modificadores.length + 1}`,
                atributo: [""],
                valor: 0,
              },
            ],
          }));
        }}
      >
        Adicionar modificador
      </Button>
    </InputGroup>
  );
};

export default Modifiers;
