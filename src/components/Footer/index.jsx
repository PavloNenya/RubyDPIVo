import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__brand">
            <div className="footer__logo logo">
              <a className="logo__link" href="#">
                <img
                  className="logo__img"
                  src="img/icons/main-logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <ul className="footer__social social">
              <li className="social__item">
                <a className="social__link" href="#">
                  <i className="social__icon icon-instagram"></i>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#">
                  <i className="social__icon icon-facebook"></i>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#">
                  <i className="social__icon icon-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>
          <nav className="footer__nav">
            <ul className="footer__items_main">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  Catalog
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  Discounts
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  Brands
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  Personal office
                </a>
              </li>
            </ul>
            <ul className="footer__items">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  Customer service
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Orders & delivery
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Returns & refunds
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  FAQs
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
            </ul>
            <ul className="footer__items">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  About us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Loyalty programme
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Sustainability
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Corporate govermance
                </a>
              </li>
            </ul>
            <ul className="footer__items">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  Contacts
                </a>
              </li>
              <li className="footer__item">
                <a href="tel:+380977756827" className="footer__link">
                  +380 (97) 77-56-827
                </a>
              </li>
              <li className="footer__item">
                <a href="mailto:sneakpeek@gmail.com" className="footer__link">
                  sneakpeek@gmail.com
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Sustainability
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Corporate govermance
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__copyright">
        © Copyright 2023 SNEAKPEEK. All rights reserved.
      </div>
    </footer>
  );
};
