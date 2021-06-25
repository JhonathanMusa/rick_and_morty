import style from "./Details.module.css";

export const DetailsCard = ({ details }) => {
  return (
    <div className={style.cardDetailsGrid}>
      <img src={details.image} alt="" className={style.detailsImg} />
      <div className={style.cardBody}>
        <p>
          <strong>Name:</strong> {details.name}
        </p>
        <p>
          <strong>Specie:</strong> {details.species}
        </p>
        <p>
          <i className="fas fa-circle"></i> {details.status}
        </p>
      </div>
    </div>
  );
};
