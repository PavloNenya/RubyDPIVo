import { useTranslation } from "react-i18next";

import arrowBlack from "../../../assets/img/icons/arrow-black.svg";
import arrowWhite from "../../../assets/img/icons/arrow-white.svg";
import play from "../../../assets/img/icons/play.svg";

import icon1 from "../../../assets/img/blog/icons/icons-1.png";
import icon2 from "../../../assets/img/blog/icons/icons-2.png";
import icon3 from "../../../assets/img/blog/icons/icons-3.png";

import blog1 from "../../../assets/img/blog/blog-1.jpg";
import blog2 from "../../../assets/img/blog/blog-2.jpg";
import blog3 from "../../../assets/img/blog/blog-3.jpg";

import "./index.scss";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <section className="page__blog blog">
      <div className="blog__container">
        <div className="blog__body">
          <div className="blog__title-block title-block">
            <h2 className="title-block__title title-2">{t("home.blog.title")}</h2>
            <div className="title-block__button button-wrapper">
              <a className="button button_md button_ghost" href="#">
                <img className="button__icon" src={arrowBlack} alt="arrow" />
                <p>{t("home.blog.view")}</p>
              </a>
            </div>
          </div>
          <div className="blog__items">
            <div className="blog__item ibg">
              <img src={blog1} alt="blog-1" />
              <div className="blog__button button-wrapper">
                <a className="button button_lg button_transparent" href="#">
                  <p>{t("home.blog.lookbook")}</p>
                  <img className="button__icon" src={arrowWhite} alt="arrow" />
                </a>
              </div>
              <div className="blog__content">
                <h2 className="blog__title title-2--reverse">{t("home.blog.new")}</h2>
                <p className="blog__text text-light">{t("home.blog.present")}</p>
              </div>
              <div className="blog__line"></div>
            </div>
            <div className="blog__item ibg">
              <img src={blog2} alt="blog-2" />
              <div className="blog__button button-wrapper">
                <a className="button button_lg button_transparent" href="#">
                  <img className="button__icon" src={play} alt="arrow" />
                  {t("home.blog.watch")}
                </a>
              </div>
              <div className="blog__content">
                <h2 className="blog__title title-2--reverse">{t("home.blog.new")}</h2>
                <p className="blog__text text-light">{t("home.blog.present")}Presenting new trends of 2023</p>
              </div>
              <div className="blog__line"></div>
            </div>
            <div className="blog__item ibg">
              <img src={blog3} alt="blog-3" />
              <div className="blog__button button-wrapper">
                <a className="button button_lg button_reverse" href="#">
                  <span>{t("home.blog.subscribe")}</span>
                </a>
              </div>
              <div className="blog__content">
                <p className="blog__text text-light">{t("home.blog.text")}</p>
              </div>
              <ul className="blog__icons icons">
                <li className="icons__item">
                  <img src={icon1} alt="icons-1" />
                </li>
                <li className="icons__item">
                  <img src={icon2} alt="icons-2" />
                </li>
                <li className="icons__item">
                  <img src={icon3} alt="icons-3" />
                </li>
              </ul>
              <div className="blog__line blog__line_small"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
