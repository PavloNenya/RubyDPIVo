import { useLocation, useNavigate } from "react-router-dom";
import btnBack from "../../assets/buttons/btn-back.svg";
import "./index.scss";

export const BackBtn = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <button
      type="button"
      className="button__back"
      onClick={() => navigate({ pathname: "..", search: state?.search })}
    >
      <span className="button__back-icon">
        <img src={btnBack} alt="btn-back" />
      </span>
      <span className="button__back-text">Back</span>
    </button>
  );
};

export default BackBtn;
