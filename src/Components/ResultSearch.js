import { useSelector } from "react-redux";
import { CharacterCard } from "./CharacterCard";

export const ResultSearch = () => {
  const search = useSelector((state) => state.search);
  return (
    <div>
      <h3>Results: </h3>
      {search.loading && <div>Searching...</div>}
      {search.characters.length >= 1 && (
        <div>
          <CharacterCard search={search} />
        </div>
      )}
      {search.error !== "" && <span>{search.error}</span>}
    </div>
  );
};
