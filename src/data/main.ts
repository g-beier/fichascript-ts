interface Race {
  label: string;
  value: number;
}

export const data_races: Race[] = [
  { label: "Humano", value: 1 },
  { label: "Anão", value: 2 },
  { label: "Dahllan", value: 3 },
  { label: "Elfo", value: 4 },
  { label: "Goblin", value: 5 },
  { label: "Lefou", value: 6 },
  { label: "Minotauro", value: 7 },
  { label: "Qareen", value: 8 },
  { label: "Golem", value: 9 },
  { label: "Hynne", value: 10 },
  { label: "Kliren", value: 11 },
  { label: "Medusa", value: 12 },
  { label: "Osteon", value: 13 },
  { label: "Sereia/Tritão", value: 14 },
  { label: "Sílfide", value: 15 },
  { label: "Suraggel", value: 16 },
  { label: "Trog", value: 17 },
];

interface Alignment {
  label: string;
  value: string;
}

export const data_alignments: Alignment[] = [
  { label: "Leal e Bondoso", value: "LB" },
  { label: "Neutro e Bondoso", value: "NB" },
  { label: "Caótico e Bondoso", value: "CB" },
  { label: "Leal e Neutro", value: "LN" },
  { label: "Neutro ", value: "N" },
  { label: "Caótico e Neutro", value: "CN" },
  { label: "Leal e Maligno", value: "LM" },
  { label: "Neutro e Maligno", value: "NM" },
  { label: "Caótico e Maligno", value: "CM" },
];

interface Background {
  label: string;
  value: number;
}

export const data_backgrounds: Background[] = [
  { label: "Acólito", value: 1 },
  { label: "Amigo dos Animais", value: 2 },
  { label: "Amnésico", value: 3 },
  { label: "Aristocrata", value: 4 },
  { label: "Artesão", value: 5 },
  { label: "Artista", value: 6 },
  { label: "Assistente de Laboratório", value: 7 },
  { label: "Batedor", value: 8 },
  { label: "Capanga", value: 9 },
  { label: "Charlatão", value: 10 },
  { label: "Circense", value: 11 },
  { label: "Criminoso", value: 12 },
  { label: "Curanderio", value: 13 },
  { label: "Eremita", value: 14 },
  { label: "Escravo", value: 15 },
  { label: "Estudioso", value: 16 },
  { label: "Fazendeiro", value: 17 },
  { label: "Forasteiro", value: 18 },
  { label: "Gladiador", value: 19 },
  { label: "Guarda", value: 20 },
  { label: "Herdeiro", value: 21 },
  { label: "Herói Camponês", value: 22 },
  { label: "Marujo", value: 23 },
  { label: "Mateiro", value: 24 },
  { label: "Membro de Guilda", value: 25 },
  { label: "Mercador", value: 26 },
  { label: "Minerador", value: 27 },
  { label: "Nômade", value: 28 },
  { label: "Pivete", value: 29 },
  { label: "Refugiado", value: 30 },
  { label: "Seguidor", value: 31 },
  { label: "Selvagem", value: 32 },
  { label: "Soldado", value: 33 },
  { label: "Taverneiro", value: 34 },
  { label: "Trabalhador", value: 35 },
];

interface Deity {
  label: string;
  value: number;
}

export const data_deities: Deity[] = [
  { label: "Aharadak", value: 1 },
  { label: "Allihanna", value: 2 },
  { label: "Arsenal", value: 3 },
  { label: "Azgher", value: 4 },
  { label: "Hyninn", value: 5 },
  { label: "Kallyadranoch", value: 6 },
  { label: "Khalmyr", value: 7 },
  { label: "Lena", value: 8 },
  { label: "Lin-Wu", value: 9 },
  { label: "Marah", value: 10 },
  { label: "Megalokk", value: 11 },
  { label: "Nimb", value: 12 },
  { label: "Oceano", value: 13 },
  { label: "Sszzaas", value: 14 },
  { label: "Tanna-Toh", value: 15 },
  { label: "Tenebra", value: 16 },
  { label: "Thwor", value: 17 },
  { label: "Thyatis", value: 18 },
  { label: "Valkaria", value: 19 },
  { label: "Wynna", value: 20 },
];
