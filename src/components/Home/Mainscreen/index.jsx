import bg from "../../../assets/img/mainscreen/bg.jpg";
import banner from "../../../assets/img/mainscreen/banner.png";

import "./index.scss";

const Mainscreen = () => {
  return (
    <section className="page__mainscreen mainscreen">
      <div className="mainscreen__container">
        <div className="mainscreen__body">
          <h1 className="mainscreen__title title-1">
            sneak
            <wbr />
            peek
          </h1>
          <div className="mainscreen__content ibg">
            <img className="mainscreen__main-img" src={bg} alt="bg.jpg" />
            <div className="mainscreen__block">
              <div className="mainscreen__text">
                <p className="text-reverse">In the whole summer show, this is the designer’s best look yet</p>
              </div>
              <div className="mainscreen__date">
                <p className="text-reverse">
                  17.06
                  <br />
                  2023
                </p>
              </div>
            </div>
            <img className="mainscreen__banner" src={banner} alt="banner.png" />
          </div>
          <ul className="mainscreen__items">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <li className="mainscreen__item" key={item}>
                <img
                  className="mainscreen__img"
                  src={`src/assets/img/mainscreen/items/item-${item}.png`}
                  alt={`item-${item}.png`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mainscreen;
