export const ProductCard = () => {
  return (
    <div className="goods__card card">
      <a href="/">
        <img
          className="card__image"
          src="/img/cards/1/item-1.jpg"
          alt="img-of-item"
        />
        <div className="infolabel infolabel-left">
          new
          <img className="infolabel__icon" src="/img/icons/clock.svg" alt="" />
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
          <p className="card__producer title-5">Nike SB</p>
          <a href="/" className="card__title title-4">
            Hoodie for skateboarding
          </a>
        </div>
        <div className="card__price price">
          <p className="price__cost title-3">$229</p>
          <span className="price__sale title-5">$229</span>
        </div>
      </div>
    </div>
  );
};
