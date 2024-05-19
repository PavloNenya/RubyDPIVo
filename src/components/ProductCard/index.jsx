/* eslint-disable react/prop-types */
import { useContext } from "react";

import { AppContext } from "../../store/context";

import { addFavorite, deleteFavorite } from "../../api/favorite";

import pressIcon from "../../assets/img/icons/heart-pressed.svg";

import shoesImg from "../../assets/img/categories/shoes.png";
import tshirtsImg from "../../assets/img/categories/t-shirts.png";
import hoodiesImg from "../../assets/img/categories/hoodies.png";
import jeensImg from "../../assets/img/categories/jeans.png";
import accesImg from "../../assets/img/categories/acces.png";
import arrowIcon from "../../assets/img/icons/arrow.svg";
import clockIcon from "../../assets/img/icons/clock.svg";

import "./index.scss";
import { getToken } from "../../services/tokenService";
import { Link } from "react-router-dom";

const photosOfCategory = [shoesImg, tshirtsImg, hoodiesImg, jeensImg, accesImg];

const ProductCard = ({ type, product, cardWidth }) => {
  const { likedProducts, setLikedProducts } = useContext(AppContext);

  const productId = product.id;

  const isProductLiked = () => {
    return likedProducts.some((product) => product.id === productId);
  };

  const handleButtonFavorite = () => {
    const productId = product.id;

    const isProductLiked = likedProducts.some(
      (product) => product.id === productId
    );

    if (isProductLiked) {
      const updatedLikedProducts = likedProducts.filter(
        (product) => product.id !== productId
      );
      deleteFavorite(product);
      setLikedProducts(updatedLikedProducts);
    } else {
      const updatedLikedProducts = [...likedProducts, product];

      const token = getToken();

      if (token) {
        addFavorite(product);
      }

      setLikedProducts(updatedLikedProducts);
    }
  };

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
          src={type !== "category" ? clockIcon : arrowIcon}
          alt=""
        />
      </div>

      {console.log(isProductLiked())}

      {type !== "category" ? (
        <div className="button-like">
          <button onClick={handleButtonFavorite} className="button-like__icon">
            <img
              src={
                isProductLiked()
                  ? pressIcon
                  : `http://localhost:9091/api/images?name=heart-svg.svg`
              }
              alt=""
            />
          </button>
        </div>
      ) : null}

      <Link
        className="products__card"
        to={`/catalog/product/${product.id}`}
        key={product.id}
      >
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
      </Link>
    </div>
  );
};

export default ProductCard;
