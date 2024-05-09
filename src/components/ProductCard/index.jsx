/* eslint-disable react/prop-types */
import "./index.scss";
import "../../shared/scss/settings.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="goods__card card">
      <img
        className="card__image"
        src={`http://localhost:9091/api/images/${product.image}`}
        alt="img-of-item"
      />
      <div className="infolabel infolabel-left">
        new
        <img
          className="infolabel__icon"
          src={`http://localhost:9091/api/images/${product.image}`}
          alt=""
        />
      </div>
      <div className="button-like">
        <button className="button-like__icon">
          <img src="/img/icons/heart.svg" alt="" />
        </button>
      </div>
      <div className="card__information">
        <div className="card__description">
          <p className="card__producer title-5">
            {product.product.producer.name}
          </p>
          <div href="/" className="card__title title-4">
            {product.product.description}
          </div>
        </div>
        <div className="card__price price">
          <p className="price__cost title-3">{product.price}$</p>
          <span className="price__sale title-5">{product.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
