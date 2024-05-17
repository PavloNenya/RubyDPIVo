import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

import logo from "../../assets/img/logo.svg";
import search from "../../assets/img/icons/search.svg";
import cart from "../../assets/img/icons/cart.svg";
import account from "../../assets/img/icons/account.svg";
import likes from "../../assets/img/icons/likes.svg";
import btnBackWhite from "../../assets/img/icons/btn-back-white.svg";
import { AppContext } from "../../store/context";
import Cookies from "js-cookie";

export const Header = () => {
  const [burger, setBurger] = useState(false);
  const { selectedProduct, setSelectedProduct } = useContext(AppContext);

  const handleBurger = () => {
    setBurger(!burger);
    document.body.classList.toggle("_lock");
  };

  useEffect(() => {
    const selectedProductFromCookie = Cookies.get("selectedProduct");

    console.log(selectedProductFromCookie);

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
              <select className="select__items" name="lang">
                <option className="select__item" value="Eng">
                  Eng
                </option>
                <option className="select__item" value="Ukr">
                  Ukr
                </option>
                <option className="select__item" value="Deu">
                  Deu
                </option>
                <option className="select__item" value="Frn">
                  Frn
                </option>
                <option className="select__item" value="Esp">
                  Esp
                </option>
              </select>
              <img className="select__icon" src={btnBackWhite} alt="btn-back" />
            </div>
            <Link to="/help">Help</Link>
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
              <input
                className="header__search"
                type="text"
                name="search"
                placeholder="Search"
              />
              <button className="header__button" type="submit">
                <img className="icon-search" src={search} alt="search" />
              </button>
            </form>
            <div
              className={`header__burger burger${burger ? " _menu-open" : ""}`}
              onClick={handleBurger}
            >
              <div className="burger__line"></div>
            </div>
            <div className="header__items">
              <a href="#" className="header__item">
                <img src={account} alt="account" />
              </a>
              <Link to="/favourites" className="header__item">
                <img src={likes} alt="likes" />
              </Link>
              <Link to="/basket" className="header__item">
                <div className="header__logo-basket">
                  <img src={cart} alt="cart" />
                  {selectedProduct.length > 0 && (
                    <div className="header__infoitem">
                      <p className="header__infoitem-text">
                        {selectedProduct.length}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
          <nav className={`header__nav${burger ? " _menu-open" : ""}`}>
            <ul className="header__menu menu">
              <li className="menu__item">
                <Link to="/catalog/1/new" className="menu__link">
                  New arrives
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/men" className="menu__link">
                  Men
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/woman" className="menu__link">
                  Woman
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/kids" className="menu__link">
                  Kids
                </Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog/1/sale" className="menu__link">
                  Sale
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
