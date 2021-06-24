import style from "./Details.module.css"

export const DetailsCard = ({ details }) => {
  return (
    <div className={style.cardDetailsGrid}>
      <img src={details.image} alt="" className={style.detailsImg} />
      <p>{details.name}</p>
      <p>{details.species}</p>
      <p><i className="fas fa-circle"></i> {details.status}</p>
    </div>
  );
};
