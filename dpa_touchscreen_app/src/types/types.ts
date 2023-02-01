export interface Pet {
  adoptLink?: string;
  age?: string;
  breed?: string;
  color?: string;
  coverPhoto?: string;
  description?: string;
  id: string;
  internalId?: string;
  name?: string;
  photos?: string[];
  sex?: string;
  size?: string;
  source?: "shelterluv" | "airtable";
  species?: string;
  status?: string;
  videos?: string[];
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export type speciesType = "dog" | "cat" | undefined;
