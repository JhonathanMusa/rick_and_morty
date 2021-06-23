import styles from "./CharacterCard.module.css";
import { Link } from "react-router-dom";

export const CharacterCard = ({ search }) => {
  return (
    <div className={styles.cardGrid}>
      {search.characters[0].results.map((item) => (
        <div key={item.id}>
          <Link to={"/details/" + item.id}>
            <img
              with={300}
              height={300}
              className={styles.dataImg}
              src={item.image}
              alt=""
            />
          </Link>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};
