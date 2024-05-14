/* eslint-disable react/prop-types */
import "./index.scss";
import "../../shared/scss/settings.scss";

import shoesImg from "../../assets/img/categories/shoes.png";
import tshirtsImg from "../../assets/img/categories/t-shirts.png";
import hoodiesImg from "../../assets/img/categories/hoodies.png";
import jeensImg from "../../assets/img/categories/jeans.png";
import accesImg from "../../assets/img/categories/acces.png";
import arrowIcon from "../../assets/img/icons/arrow.svg";

const photosOfCategory = [shoesImg, tshirtsImg, hoodiesImg, jeensImg, accesImg];

const ProductCard = ({ type, product, cardWidth = 285 }) => {
  return (
    <div className="goods__card card" style={{ width: cardWidth }}>
      <img
        className="card__image"
        src={
          type !== "category"
            ? `http://localhost:9091/api/images/${product.main_photo_id}`
            : photosOfCategory[product.id - 1]
        }
        alt="img-of-item"
      />
      <div className="infolabel infolabel-left">
        {type !== "category" ? "new" : product?.infolabel}
        <img
          className="infolabel__icon"
          src={
            type !== "category"
              ? `http://localhost:9091/api/images?name=clock-svg.svg`
              : arrowIcon
          }
          alt=""
        />
      </div>

      {type !== "category" ? (
        <div className="button-like">
          <button className="button-like__icon">
            <img
              src={`http://localhost:9091/api/images?name=heart-svg.svg`}
              alt=""
            />
          </button>
        </div>
      ) : null}

      <div className="card__information">
        <div className="card__description">
          <div href="/" className="card__title title-4">
            {product.description}
          </div>
          {type !== "category" ? (
            <p className="card__producer title-5">{product.producer.name}</p>
          ) : null}
        </div>

        {type !== "category" ? (
          <div className="card__price price">
            <p className="price__cost title-3">{product.price}$</p>
            <span className="price__sale title-5">{product.price}$</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
