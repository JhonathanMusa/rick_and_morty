export const ResultSearch = ({ datos }) => {
  return (
    <div>
      <p>{datos.name}</p>
      <img className="data-img" src={datos.image} alt="" />
    </div>
  );
};
