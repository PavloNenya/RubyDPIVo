import PropTypes from "prop-types";

import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cardWidth, type = "products" }) => {
  return (
    <div className={`${type}__card card`} style={{ minWidth: cardWidth }}>
      <div className="card__image">
        <Skeleton height={355} />
      </div>
      <div className="card__information">
        <div className="card__description">
          <div href="/" className="card__title title-4"></div>
          <Skeleton height={30} />
        </div>
        <div className="card__description">
          <div href="/" className="card__title title-4"></div>

          <Skeleton height={25} />
        </div>
      </div>
    </div>
  );
};

CardSkeleton.propTypes = {
  cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
};

export default CardSkeleton;
