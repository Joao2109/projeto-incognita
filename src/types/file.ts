export interface F {
  nome: string;
  jogador: string;
  perfil: {
    nome: string;
    descoberto: boolean;
  };
  complemento: {
    nome: string;
    descoberto: boolean;
  };
  destino: number;
  personalidade: [string, string, string];
  atributos: {
    bravura: number;
    magnetismo: number;
    intelecto: number;
    instinto: number;
    controle: number;
  };
  modificadores:
    | {
        causa: string;
        atributo: string[];
        valor: number;
      }[];
  competencias: {
    nome: string;
    dominios: string[];
    origem: string;
  }[];
  dom: string[];
  saude: number;
  exaustao: number;
  fardos: { id: number; descricao: string; descoberto: boolean }[];
  obsessoes: { id: number; descricao: string; descoberto: boolean }[];
  laco: { descricao: string; descoberto: boolean }[];
  esfera: { descricao: string; descoberto: boolean }[];
  sigilo: { descricao: string; descoberto: boolean }[];
  inventario: string[];
  recursos: string[];
  anotacoes: string;
}
export const f: F = {
  nome: "",
  jogador: "",
  perfil: { nome: "", descoberto: false },
  complemento: { nome: "", descoberto: false },
  destino: 0,
  personalidade: ["", "", ""],
  atributos: {
    bravura: 0,
    magnetismo: 0,
    intelecto: 0,
    instinto: 0,
    controle: 0,
  },
  modificadores: [],
  competencias: [
    {
      nome: "",
      dominios: ["", "", "Em Incógnita"],
      origem: "",
    },
    {
      nome: "",
      dominios: ["", "", "Em Incógnita"],
      origem: "",
    },
    {
      nome: "",
      dominios: ["", "", "Em Incógnita"],
      origem: "",
    },
    {
      nome: "Em Incógnita",
      dominios: ["Em Incógnita", "Em Incógnita", "Em Incógnita"],
      origem: "Em Incógnita",
    },
    {
      nome: "Em Incógnita",
      dominios: ["Em Incógnita", "Em Incógnita", "Em Incógnita"],
      origem: "Em Incógnita",
    },
  ],
  dom: ["Em Incógnita", "Em Incógnita", "Em Incógnita"],
  saude: 6,
  exaustao: 6,
  fardos: [
    { id: 0, descricao: "", descoberto: false },
    { id: 1, descricao: "", descoberto: false },
  ],
  obsessoes: [
    { id: 0, descricao: "", descoberto: false },
    { id: 1, descricao: "", descoberto: false },
  ],
  laco: [
    { descricao: "", descoberto: false },
    { descricao: "", descoberto: false },
    { descricao: "", descoberto: false },
  ],
  esfera: [
    { descricao: "", descoberto: false },
    { descricao: "", descoberto: false },
    { descricao: "", descoberto: false },
  ],
  sigilo: [
    { descricao: "", descoberto: false },
    { descricao: "", descoberto: false },
    { descricao: "", descoberto: false },
  ],
  inventario: [],
  recursos: [],
  anotacoes: "",
};
