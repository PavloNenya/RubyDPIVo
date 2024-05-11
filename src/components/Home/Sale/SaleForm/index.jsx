import "./index.scss";

import sale from "../../../../assets/img/sale/sale-1.jpg";

export const SaleForm = () => {
  return (
    <section className="page__sale sale">
      <div className="sale__container">
        <div className="sale__body">
          <div className="sale__img-wrapper">
            <img className="sale__img" src={sale} alt="sale-2.jpg" />
          </div>
          <div className="sale__content">
            <div className="sale__block">
              <h2 className="sale__title title-2">35% off for only this friday and get special gift</h2>
              <p className="sale__text text-muted">
                Subscribe to the our newsletter and get a bonus code for a 35% discount during this friday sale, plus a
                cool gift!!
              </p>
            </div>
            <form className="sale__form form-sale" action="#">
              <div className="form-sale__item">
                <input className="form-sale__input text-muted" type="email" name="email" placeholder="Enter e-mail" />
                <button className="form-sale__button" type="submit">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
