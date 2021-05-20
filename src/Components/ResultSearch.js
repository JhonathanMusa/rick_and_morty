import { useSelector } from "react-redux";
import styles from "./Result.module.css"

export const ResultSearch = () => {
  const search = useSelector((state) => state.search);
  return (
    <div>
      <h3>Results: </h3>
      {search.loading && <div>Searching...</div>}
      {search.characters.length >= 1 && (
        <div>
          <p>{search.characters[0].results[0].name}</p>
          <img
            with={300}
            height={300}
            className={styles.dataImg}
            src={search.characters[0].results[0].image}
            alt=""
          />
        </div>
      )}
      {search.error !== "" && <span>{search.error}</span>}
    </div>
  );
};
