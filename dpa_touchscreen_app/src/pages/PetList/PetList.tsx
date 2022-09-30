import axios from "axios";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

export const PetList: FC = () => {
  const { isLoading, error, data, isFetching } = useQuery(["petList"], () =>
    axios
      .get("http://localhost:3001/petlist")
      .then((res) => res.data)
  );

  if (isLoading) return (
    <div>Loading...</div>
  );

  if (error) {
    console.log(error);
    return (
      <div>error</div>
    );
  };

  return (
    <div>
      <header>pet list</header>
    </div>
  );
};
