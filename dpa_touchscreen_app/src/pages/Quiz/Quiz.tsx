import axios from "axios";
import { FC, useState } from "react";
import { speciesType } from "types/types";

import { useQuery } from "@tanstack/react-query";

import { Age } from "./Age";
import { Gender } from "./Gender";
import { Results } from "./Results";
import { Size } from "./Size";
import { Species } from "./Species";

export const Quiz: FC = () => {
  const [species, setSpecies] = useState<speciesType>(undefined);
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [age, setAge] = useState<string | undefined>(undefined);
  const [size, setSize] = useState<string | undefined>(undefined);

  const [showSpecies, setShowSpecies] = useState<boolean>(true);
  const [showGender, setShowGender] = useState<boolean>(false);
  const [showAge, setShowAge] = useState<boolean>(false);
  const [showSize, setShowSize] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  const { data } = useQuery(
    ["petList"],
    () =>
      axios
        .get("https://pe19l95l98.execute-api.us-east-2.amazonaws.com/dpa/pets")
        .then((res) => res.data),
    {
      /* refetch every 10 minutes */
      refetchInterval: 1000 * 60 * 10,
      staleTime: 1000 * 60 * 10,
    }
  );

  const handleSetSpecies = (species: speciesType) => {
    setSpecies(species);
    setShowSpecies(false);
    setShowGender(true);
  };

  const handleSetGender = (gender: string) => {
    setGender(gender);
    setShowGender(false);
    setShowAge(true);
  };

  const handleSetAge = (age: string) => {
    setAge(age);
    setShowAge(false);

    if (species === "dog") {
      setShowSize(true);
    } else {
      setShowResults(true);
    }
  };

  const handleSetSize = (size: string) => {
    setSize(size);
    setShowSize(false);
    setShowResults(true);
  };

  const speciesPage = showSpecies
    ? Species({ setSpecies: handleSetSpecies })
    : null;
  const genderPage = showGender
    ? Gender({
        setGender: handleSetGender,
        species: species,
      })
    : null;
  const agePage = showAge
    ? Age({ setAge: handleSetAge, species: species })
    : null;
  const sizePage = showSize ? Size({ setSize: handleSetSize }) : null;
  const resultsPage = showResults
    ? Results({
        species,
        gender,
        age,
        size,
        data,
      })
    : null;

  return (
    <div className="app">
      {speciesPage}
      {genderPage}
      {agePage}
      {sizePage}
      {resultsPage}
    </div>
  );
};
