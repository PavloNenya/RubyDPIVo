import "./index.scss";

export const Header = () => {
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
              <i className="select__icon icon-arrow-down"></i>
            </div>
            <div className="header__select select">
              <select className="select__items" name="help" id="dynamicSelect">
                <option className="select__item">Help</option>
                <option className="select__item">Help</option>
                <option className="select__item">Help</option>
                <option className="select__item">Help</option>
                <option className="select__item">Help</option>
              </select>
              <i className="select__icon icon-arrow-down"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="header__container">
        <div className="header__body">
          <div className="header__main">
            <div className="header__logo logo">
              <a className="logo__link" href="#">
                <img
                  className="logo__img"
                  src={`http://localhost:9091/api/images?name=main-logo.svg`}
                  alt="logo"
                />
              </a>
            </div>
            <form className="header__form">
              <input
                className="header__search"
                type="text"
                name="search"
                placeholder="Search"
              />
              <button className="header__button" type="submit">
                <i className="icon-search"></i>
              </button>
            </form>
            <div className="header__burger burger">
              <div className="burger__line"></div>
            </div>
            <div className="header__items">
              <a href="#" className="header__item">
                <i className="icon-user"></i>
              </a>
              <a href="#" className="header__item">
                <i className="icon-heart"></i>
              </a>
              <a href="#" className="header__item">
                <i className="icon-shopping-cart"></i>
              </a>
            </div>
          </div>
          <nav className="header__nav">
            <ul className="header__menu menu">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  New arrives
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Men
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Woman
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Kids
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Brands
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Sale
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
