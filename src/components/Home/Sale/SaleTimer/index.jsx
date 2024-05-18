import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import sale from "../../../../assets/img/sale/sale-1.jpg";
import arrowWhite from "../../../../assets/img/icons/arrow-white.svg";

import "./index.scss";

const SaleTimer = () => {
  const { t } = useTranslation();

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-06-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    return (
      <div key={interval} className={`timer__item timer__${interval}`} data-title={t(`home.saletimer.${interval}`)}>
        {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
      </div>
    );
  });

  return (
    <section className="page__sale sale">
      <div className="sale__container">
        <div className="sale__body">
          <div className="sale__img-wrapper">
            <img className="sale__img" src={sale} alt="sale-1.jpg" />
          </div>
          <div className="sale__content">
            <div className="sale__block">
              <h2 className="sale__title title-2">{t("home.saletimer.title")}</h2>
              <p className="sale__text text-muted">{t("home.saletimer.text")}</p>
            </div>
            <div className="sale__timer timer">
              <div className="timer__items">{timerComponents}</div>
            </div>
            <div className="sale__button button-wrapper">
              <Link className="button button_lg button_default" to="/catalog/1/sale">
                <p>{t("home.saletimer.button")}</p>
                <img className="button__icon" src={arrowWhite} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleTimer;
