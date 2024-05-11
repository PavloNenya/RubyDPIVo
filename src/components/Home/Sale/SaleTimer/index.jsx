import "./index.scss";

import sale from "../../../../assets/img/sale/sale-1.jpg";
import arrowWhote from "../../../../assets/img/icons/arrow-white.svg";

export const SaleTimer = () => {
  return (
    <section className="page__sale sale">
      <div className="sale__container">
        <div className="sale__body">
          <div className="sale__img-wrapper">
            <img className="sale__img" src={sale} alt="sale-1.jpg" />
          </div>
          <div className="sale__content">
            <div className="sale__block">
              <h2 className="sale__title title-2">Get 30% sale for summer collection</h2>
              <p className="sale__text text-muted">
                The most wanted styles is waiting for you right now. Find the best styles of modern outfits for you at
                one place.
              </p>
            </div>
            <div className="sale__timer timer">
              <div className="timer__items">
                <div className="timer__item timer__days" data-title="days">
                  00
                </div>
                <div className="timer__item timer__hours" data-title="hours">
                  00
                </div>
                <div className="timer__item timer__minutes" data-title="minutes">
                  00
                </div>
                <div className="timer__item timer__seconds" data-title="seconds">
                  00
                </div>
              </div>
            </div>
            <div className="sale__button button-wrapper">
              <a className="button button_lg button_default" href="#">
                <p>buy now</p>
                <img className="button__icon" src={arrowWhote} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
