"use client";
import { useEffect, useState } from "react";
import File from "@/components/file";
import { Button } from "@/components/ui/button";
import { f, F } from "@/types/file";
export default function Home() {
  const [loadedFile, setLoadedFile] = useState<File | undefined>(undefined);
  const [fileData, setFileData] = useState<F>(f);
  useEffect(() => {
    if (loadedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsedData = JSON.parse(reader.result as string);
          if (parsedData as F) {
            setFileData(parsedData);
          } else {
            alert("Formato de arquivo inválido.");
          }
        } catch (err) {
          alert(err);
        }
      };
      reader.readAsText(loadedFile);
    }
  }, [loadedFile]);
  const uploadFile = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = () => {
      if (input.files) {
        setLoadedFile(input.files[0]);
      }
    };
    input.click();
    input.remove();
  };
  const downloadFile = () => {
    if (fileData) {
      const blob = new Blob([JSON.stringify(fileData)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileData.nome.replaceAll(" ", "-")}.json`;
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    }
  };
  return (
    <main className="w-full flex flex-col items-center p-6">
      <div className="w-full max-w-[210mm] flex justify-center gap-4 flex-col sm:flex-row ">
        <Button
          onClick={uploadFile}
          className="sm:my-4 cursor-pointer text-foreground bg-background border border-border hover:bg-accent"
        >
          Selecionar arquivo
        </Button>
        <Button
          onClick={downloadFile}
          className="sm:my-4 cursor-pointer text-foreground bg-background border border-border hover:bg-accent"
        >
          Baixar arquivo
        </Button>
      </div>
      <File className="" fileData={fileData} setFileData={setFileData} />
    </main>
  );
}
