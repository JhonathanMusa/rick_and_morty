import styles from "./Result.module.css";

export const CharacterCard = ({ search }) => {
  return (
    <li className={styles.cardGrid}>
      {search.characters[0].results.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <img
            with={300}
            height={300}
            className={styles.dataImg}
            src={item.image}
            alt=""
          />
        </div>
      ))}
    </li>
  );
};
