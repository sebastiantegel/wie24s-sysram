import { useParams } from "react-router";

export const Movie = () => {
  const { id } = useParams();

  return <h2>Movie: {id}</h2>;
};
