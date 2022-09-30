import axios from "axios";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

export const PetList: FC = () => {
  const { isLoading, error, data, isFetching } = useQuery(["petList"], (() =>
    axios
      .get("http://localhost:3001/petlist")
      .then((res) => res.data)
  ), {
    /* refetch every 10 minutes */
    refetchInterval: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) return (
    <div>Loading...</div>
  );

  if (error) {
    console.log(error);
    return (
      <div>error</div>
    );
  };

  const petList = data?.pets?.map((pet: any) => {
    return (
      <div>{pet.name}</div>
    );
  });

  return (
    <div>
      <header>pet list</header>
      <p>{petList}</p>
    </div>
  );
};
