import { F } from "@/types/file";
import {
  Input,
  InputField,
  InputGroup,
  InputTitle,
  Label,
  TextArea,
} from "../input";

interface CompetencesProps {
  fileData: F;
  setFileData: React.Dispatch<React.SetStateAction<F>>;
}

const Competences = ({ fileData, setFileData }: CompetencesProps) => {
  return (
    <>
      <InputGroup className="">
        <InputTitle>Competências</InputTitle>
        {fileData.competencias.map((comp, i) => {
          return (
            <InputGroup
              key={i}
              className="flex md:items-center flex-col md:flex-row gap-2"
            >
              <InputField className="bg-background border-accent flex-1">
                <Label className="h-8 text-xl text-center">Competência</Label>
                <Input
                  className="h-8 text-xl text-center"
                  type="text"
                  value={comp.nome}
                  onChange={(e) => {
                    const updatedComp = { ...comp, nome: e.target.value };
                    setFileData((prevState) => ({
                      ...prevState,
                      competencias: [
                        ...prevState.competencias.slice(0, i),
                        updatedComp,
                        ...prevState.competencias.slice(i + 1),
                      ],
                    }));
                  }}
                />
              </InputField>
              <InputGroup className="flex-2 flex flex-col gap-2">
                {comp.dominios.map((dom, j) => {
                  return (
                    <InputField key={j}>
                      <Input
                        type="text"
                        value={dom}
                        onChange={(e) => {
                          const updatedDominios = [...comp.dominios];
                          updatedDominios[j] = e.target.value;
                          const updatedComp = {
                            ...comp,
                            dominios: updatedDominios,
                          };
                          setFileData((prevState) => ({
                            ...prevState,
                            competencias: [
                              ...prevState.competencias.slice(0, i),
                              updatedComp,
                              ...prevState.competencias.slice(i + 1),
                            ],
                          }));
                        }}
                      />
                    </InputField>
                  );
                })}
              </InputGroup>
              <InputGroup className="flex-2">
                <Label>Origem</Label>
                <InputField>
                  <TextArea
                    className="h-20"
                    value={comp.origem}
                    onChange={(e) => {
                      const updatedComp = { ...comp, origem: e.target.value };
                      setFileData((prevState) => ({
                        ...prevState,
                        competencias: [
                          ...prevState.competencias.slice(0, i),
                          updatedComp,
                          ...prevState.competencias.slice(i + 1),
                        ],
                      }));
                    }}
                  />
                </InputField>
              </InputGroup>
            </InputGroup>
          );
        })}
      </InputGroup>
      <InputGroup>
        <InputTitle>Dom</InputTitle>
        <InputGroup className="p-0 border-0 flex flex-col gap-2">
          {fileData.dom.map((dom, i) => {
            return (
              <InputField
                key={i}
                className={`w-10/12 max-w-[500px] ${
                  i === 0 ? "self-start" : i === 1 ? "self-center" : "self-end"
                }`}
              >
                <Input
                  className="w-full"
                  value={dom}
                  onChange={(e) => {
                    setFileData((prevState) => ({
                      ...prevState,
                      dom: [
                        ...prevState.dom.slice(0, i),
                        e.target.value,
                        ...prevState.dom.slice(i + 1),
                      ],
                    }));
                  }}
                />
              </InputField>
            );
          })}
        </InputGroup>
      </InputGroup>
    </>
  );
};

export default Competences;
