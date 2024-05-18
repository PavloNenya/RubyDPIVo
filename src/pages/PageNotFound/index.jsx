import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/img/logo.svg";

import "./index.scss";

const PageNotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  navigate("/404");

  useEffect(() => {
    navigate("/404");
  }, [navigate]);

  return (
    <section className="page__notfound notfound">
      <div className="notfound__container">
        <div className="notfound__body">
          <div className="notfound__maincontent">
            <div className="notfound__top">
              <img className="notfound__logo" src={logo} alt="logo.svg" />
              <h1 className="notfound__title title-2">{t("notfound.title")}</h1>
            </div>
            <div className="notfound__dropdown-wrapper">
              <p className="notfound__text text-muted">{t("notfound.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
