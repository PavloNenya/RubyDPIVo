import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import { AppContext } from "../../store/context";

import { deleteToken, getToken } from "../../services/tokenService";

import { logout } from "../../api/auth";

import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/icons/search.svg";
import cart from "../../assets/img/icons/cart.svg";
import account from "../../assets/img/icons/account.svg";
import likes from "../../assets/img/icons/likes.svg";
import btnBackWhite from "../../assets/img/icons/btn-back-white.svg";

import "./index.scss";

export const Header = () => {
  const [burger, setBurger] = useState(false);
  const { selectedProduct, setSelectedProduct, isAuth, setIsAuth, buttonActive, setButtonActive } =
    useContext(AppContext);

  const { t, i18n } = useTranslation();

  const handleBurger = () => {
    setBurger(!burger);
    document.body.classList.toggle("_lock");
  };

  const handleLogout = async () => {
    const token = getToken();
    if (token) {
      try {
        await logout();
      } catch (e) {
        console.log(e);
      }
    }

    deleteToken();
    setIsAuth(false);
  };

  const handleSelectLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const selectedProductFromCookie = Cookies.get("selectedProduct");

    if (selectedProductFromCookie) {
      setSelectedProduct(JSON.parse(selectedProductFromCookie));
    }
  }, [setSelectedProduct]);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__container">
          <div className="header__top-body">
            <div className="header__select select">
              <select className="select__items" name="lang" onChange={handleSelectLanguage}>
                <option className="select__item" value="en">
                  en
                </option>
                <option className="select__item" value="ua">
                  ua
                </option>
                <option className="select__item" value="de">
                  de
                </option>
                <option className="select__item" value="fr">
                  fr
                </option>
                <option className="select__item" value="es">
                  es
                </option>
              </select>
              <img className="select__icon" src={btnBackWhite} alt="btn-back" />
            </div>
            <Link to="/help">{t("header.help")}</Link>
          </div>
        </div>
      </div>
      <div className="header__container">
        <div className="header__body">
          <div className="header__main">
            <div className="header__logo logo">
              <Link className="logo__link" to="/">
                <img className="logo__img" src={logo} alt="logo" />
              </Link>
            </div>
            <form className="header__form">
              <input className="header__search" type="text" name="search" placeholder={t("header.search")} />
              <button className="header__button" type="submit">
                <img className="icon-search" src={search} alt="search" />
              </button>
            </form>
            <div className={`header__burger burger${burger ? " _menu-open" : ""}`} onClick={handleBurger}>
              <div className="burger__line"></div>
            </div>
            <div className="header__items">
              <Link to="/favourites" className="header__item">
                <img src={likes} alt="likes" />
              </Link>
              <Link to="/basket" className="header__item">
                <div className="header__logo-basket">
                  <img src={cart} alt="cart" />
                  {selectedProduct.length > 0 && (
                    <div className="header__infoitem">
                      <p className="header__infoitem-text">{selectedProduct.length}</p>
                    </div>
                  )}
                </div>
              </Link>
              <button href="#" className="header__item" onClick={() => setButtonActive(!buttonActive)}>
                <img src={account} alt="account" />
              </button>
              <div className={`header__list list${buttonActive ? " _active" : ""}`}>
                {isAuth ? (
                  <>
                    <Link className="list__item" to="/profile" onClick={() => setButtonActive(false)}>
                      {t("header.profile")}
                    </Link>
                    <button
                      className="list__item"
                      to="/logout"
                      onClick={() => {
                        handleLogout();
                        setButtonActive(false);
                      }}
                    >
                      {t("header.logout")}
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="list__item" to="/signin" onClick={() => setButtonActive(false)}>
                      {t("header.login")}
                    </Link>
                    <Link className="list__item" to="/signup" onClick={() => setButtonActive(false)}>
                      {t("header.register")}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <nav className={`header__nav${burger ? " _menu-open" : ""}`}>
            <ul className="header__menu menu">
              <li className="menu__item">
                <Link to="/catalog/1/new" className="menu__link">
                  {t("header.new")}
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/men" className="menu__link">
                  {t("header.men")}
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/woman" className="menu__link">
                  {t("header.woman")}
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/kids" className="menu__link">
                  {t("header.kids")}
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/sale" className="menu__link">
                  {t("header.sale")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
