import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import backToHome from "../../assets/img/checkout/backToHome.svg";

import "./index.scss";

export const ThankyouPage = () => {
  const { t } = useTranslation();

  return (
    <main className="page">
      <section className="page__thankyou thankyou">
        <div className="thankyou__container">
          <div className="thankyou__body">
            <div className="thankyou__body-wrapper">
              <div className="thankyou__infoblock">
                <h4 className="thankyou__title">{t("thankyou.success")}</h4>
                <div className="thankyou__infoblock-top">
                  <div className="thankyou__subtitle">
                    <p>{t("thankyou.order")} #17150810</p>
                    <p className="thankyou__sub title-5">
                      {t("thankyou.details")}
                    </p>
                  </div>
                </div>

                <hr className="thankyou__infoblock-line" />

                <Link to="/" className="thankyou__backhome">
                  <img src={backToHome} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankyouPage;
