import "./index.scss";

import logo from "../../assets/img/logo.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__brand">
            <div className="footer__logo logo">
              <a className="logo__link" href="#">
                <img className="logo__img" src={logo} alt="logo" />
              </a>
            </div>
            <ul className="footer__social social">
              <li className="social__item">
                <a className="social__link" href="#">
                  <svg
                    className="social__icon"
                    width="12.000000"
                    height="12.000000"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M8.76 0L3.23 0C2.37 0 1.55 0.34 0.94 0.94C0.34 1.55 0 2.37 0 3.23L0 8.76C0 9.62 0.34 10.44 0.94 11.05C1.55 11.65 2.37 12 3.23 12L8.76 12C9.62 12 10.44 11.65 11.05 11.05C11.65 10.44 12 9.62 12 8.76L12 3.23C12 2.37 11.65 1.55 11.05 0.94C10.44 0.34 9.62 0 8.76 0ZM6 8.76C5.45 8.76 4.91 8.6 4.46 8.3C4 7.99 3.65 7.56 3.44 7.06C3.23 6.55 3.17 5.99 3.28 5.45C3.39 4.92 3.65 4.42 4.04 4.04C4.42 3.65 4.92 3.39 5.45 3.28C5.99 3.17 6.55 3.23 7.06 3.44C7.56 3.65 7.99 4 8.3 4.46C8.6 4.91 8.76 5.45 8.76 6C8.76 6.73 8.47 7.43 7.95 7.95C7.43 8.47 6.73 8.76 6 8.76ZM9.46 3.23C9.32 3.23 9.19 3.18 9.07 3.11C8.96 3.03 8.87 2.92 8.82 2.8C8.76 2.67 8.75 2.53 8.78 2.4C8.8 2.26 8.87 2.14 8.97 2.04C9.06 1.95 9.19 1.88 9.32 1.85C9.46 1.83 9.59 1.84 9.72 1.89C9.85 1.95 9.96 2.03 10.03 2.15C10.11 2.26 10.15 2.4 10.15 2.53C10.15 2.72 10.08 2.89 9.95 3.02C9.82 3.15 9.64 3.23 9.46 3.23ZM7.84 6C7.84 6.36 7.73 6.72 7.53 7.02C7.33 7.33 7.04 7.56 6.7 7.7C6.36 7.84 5.99 7.88 5.64 7.81C5.28 7.74 4.95 7.56 4.69 7.3C4.43 7.04 4.25 6.71 4.18 6.35C4.11 6 4.15 5.63 4.29 5.29C4.43 4.95 4.66 4.66 4.97 4.46C5.27 4.26 5.63 4.15 6 4.15C6.49 4.15 6.95 4.34 7.3 4.69C7.65 5.04 7.84 5.5 7.84 6Z"
                      fill="#2A2A2A"
                    />
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#">
                  <svg
                    className="social__icon"
                    width="12.000000"
                    height="12.000000"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M12 6C12 2.68 9.31 0 6 0C2.68 0 0 2.68 0 6C0 8.9 2.06 11.32 4.8 11.88L4.8 7.8L3.59 7.8L3.59 6L4.8 6L4.8 4.5C4.8 3.34 5.74 2.4 6.9 2.4L8.4 2.4L8.4 4.19L7.19 4.19C6.86 4.19 6.59 4.47 6.59 4.8L6.59 6L8.4 6L8.4 7.8L6.59 7.8L6.59 11.97C9.63 11.66 12 9.11 12 6Z"
                      fill="#2A2A2A"
                    />
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a className="social__link" href="#">
                  <svg
                    className="social__icon"
                    width="10.000000"
                    height="12.000000"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M7.93 1.79C7.49 1.3 7.25 0.66 7.25 0L5.28 0L5.28 7.9C5.27 8.33 5.09 8.74 4.78 9.03C4.47 9.33 4.06 9.5 3.63 9.5C2.73 9.5 1.97 8.76 1.97 7.84C1.97 6.74 3.03 5.92 4.12 6.26L4.12 4.24C1.92 3.95 0 5.66 0 7.84C0 9.96 1.75 11.48 3.62 11.48C5.63 11.48 7.25 9.85 7.25 7.84L7.25 3.83C8.05 4.4 9.01 4.71 10 4.71L10 2.74C10 2.74 8.8 2.79 7.93 1.79Z"
                      fill="#2A2A2A"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <nav className="footer__nav">
            <ul className="footer__items_main">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  {t("footer.catalog")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  {t("footer.discount")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  {t("footer.brands")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  {t("footer.office")}
                </a>
              </li>
            </ul>
            <ul className="footer__items">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  {t("footer.service")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.orders")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.returns")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.faq")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.policy")}
                </a>
              </li>
            </ul>
            <ul className="footer__items">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  {t("footer.about")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.loyal")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.blog")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.sustainability")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.govermance")}
                </a>
              </li>
            </ul>
            <ul className="footer__items">
              <li className="footer__item">
                <a href="#" className="footer__link_bold">
                  {t("footer.contacts")}
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
                  {t("footer.sustain")}
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {t("footer.corporate")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer__copyright">{t("footer.")}© Copyright 2023 SNEAKPEEK. All rights reserved.</div>
    </footer>
  );
};
