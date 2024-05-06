/* eslint-disable react/prop-types */
import "./index.scss";
import "../../shared/scss/settings.scss";

const ProductCard = ({ product, cardWidth }) => {
  return (
    <div className="goods__card card" style={{ width: cardWidth }}>
      <a href="/">
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
      </a>
      <div className="button-like">
        <a href="/"></a>
        <a className="button-like__icon" href="">
          <img src="/img/icons/heart.svg" alt="" />
        </a>
      </div>
      <div className="card__information">
        <div className="card__description">
          <p className="card__producer title-5">
            {product.product.producer.name}
          </p>
          <a href="/" className="card__title title-4">
            {product.product.description}
          </a>
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
