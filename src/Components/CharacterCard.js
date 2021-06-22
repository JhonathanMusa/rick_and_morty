import styles from "./CharacterCard.module.css";

export const CharacterCard = ({ search }) => {
  return (
    <div className={styles.cardGrid}>
      {search.characters[0].results.map((item) => (
        <div key={item.id}>
          <img
            with={300}
            height={300}
            className={styles.dataImg}
            src={item.image}
            alt=""
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};
