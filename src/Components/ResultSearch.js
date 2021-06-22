import { useSelector } from "react-redux";
import { CharacterCard } from "./CharacterCard";

export const ResultSearch = () => {
  const search = useSelector((state) => state.search);
  return (
    <div>
      <h1>Characters: </h1>
      {search.loading && <div>Searching...</div>}
      {search.characters.length >= 1 && <CharacterCard search={search} />}
      {search.error !== "" && <span>{search.error}</span>}
    </div>
  );
};
