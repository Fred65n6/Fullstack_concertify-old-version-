import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Concert {
  id: number;
  name: string;
  background_image: string;
  playtime: number;
}

export interface ConcertResponse {
  count: number;
  results: Concert[];
}

const useConcerts = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<ConcertResponse>("games")
      .then((response) => {
        setConcerts(response.data.results);
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => setError(error.message));
  }, []);

  return { concerts, error, isLoading };
};

export default useConcerts;