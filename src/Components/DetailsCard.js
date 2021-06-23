import styles from "./Details.module.css";

export const DetailsCard = ({ details }) => {
  return (
    <div className={styles.cardGrid}>
      <img src={details.image} alt="" />
      <p>{details.name}</p>
      <p>{details.species}</p>
      <p>{details.status}</p>
    </div>
  );
};
