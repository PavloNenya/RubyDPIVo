import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Pagination = () => {
  const { page } = useParams();
  const [totalPages, setTotalPages] = useState(10);

  return (
    <div className="products__pagination pagination">
      <Link to={page < 2 ? "" : `/catalog/${page - 1}`}>
        <button className="pagination__button left">
          <i className="pagination__icon icon-arrow-down"></i>
        </button>
      </Link>
      <p className="pagination__text">Page</p>
      <ul className="pagination__items">
        <li className="pagination__item">
          <Link to="/catalog/1" className="pagination__link">
            1
          </Link>
        </li>
        <li className="pagination__item">
          <Link to="/catalog/2" className="pagination__link">
            2
          </Link>
        </li>
        <li className="pagination__item">
          <Link to="/catalog/3" className="pagination__link">
            3
          </Link>
        </li>
        <li className="pagination__item">...</li>
        <li className="pagination__item">
          <Link to={`/catalog/${totalPages}`} className="pagination__link">
            {totalPages}
          </Link>
        </li>
      </ul>
      <Link to={`/catalog/${parseInt(page) + 1}`}>
        <button className="pagination__button right">
          <i className="pagination__icon icon-arrow-down"></i>
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
