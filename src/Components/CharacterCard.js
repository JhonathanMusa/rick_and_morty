import styles from "./Result.module.css"

export const CharacterCard = ({ search }) => {
  return (
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
  );
};
