import { useEffect, useState } from "react";
import style from "./Details.module.css";

export const DetailsCard = ({ details }) => {
  const [caracStatus, setCaracStatus] = useState("");

  useEffect(() => {
    setCaracStatus(details.status);
  }, [details]);

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
          {caracStatus === "Alive" ? (
            <div className={style.green}>
              <i className="fas fa-circle"></i>
              {caracStatus}
            </div>
          ) : (
            <div className={style.red}>
              <i className="fas fa-circle red"></i>
              {caracStatus}
            </div>
          )}
        </p>
      </div>
    </div>
  );
};
