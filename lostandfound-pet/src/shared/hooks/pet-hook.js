import { useState, useEffect } from "react";

import { useHttpClient } from "../hooks/http-hook";

export const usePetData = (props) => {
  const [pets, setPets] = useState();

  const { sendRequest, isLoading, error, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/pet/allPets"
        );
        setPets(responseData.pets);
      } catch (error) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return { pets, isLoading, error, clearError };
};
