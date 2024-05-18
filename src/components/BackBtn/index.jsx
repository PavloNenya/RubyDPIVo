import { useLocation, useNavigate } from "react-router-dom";
import btnBack from "../../assets/img/icons/btn-back.svg";
import "./index.scss";
import { useTranslation } from "react-i18next";

export const BackBtn = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { t } = useTranslation();

  return (
    <button type="button" className="button__back" onClick={() => navigate({ pathname: "..", search: state?.search })}>
      <span className="button__back-icon">
        <img src={btnBack} alt="btn-back" />
      </span>
      <span className="button__back-text">{t("back")}</span>
    </button>
  );
};

export default BackBtn;
