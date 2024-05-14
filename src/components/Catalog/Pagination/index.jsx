import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import propTypes from "prop-types";

const Pagination = ({ totalPages }) => {
  const { page, type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (page < 1 || page > totalPages) {
      return navigate("/catalog/1");
    }
  }, [navigate, page, totalPages]);

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
          <Link to={`/catalog/1${type ?? ""}`} className="pagination__link">
            1
          </Link>
        </li>
        <li className="pagination__item" hidden={page == 1 || page == 2}>
          ...
        </li>
        <li className="pagination__item" hidden={page == 1}>
          <Link
            to={+page > totalPages - 2 ? `/catalog/${totalPages - 2}` : `/catalog/${page}`}
            className="pagination__link"
          >
            {+page > totalPages - 2 ? totalPages - 2 : page}
          </Link>
        </li>
        <li className="pagination__item">
          <Link
            to={+page > totalPages - 3 ? `/catalog/${totalPages - 1}` : `/catalog/${+page + 1}`}
            className="pagination__link"
          >
            {+page > totalPages - 3 ? totalPages - 1 : +page + 1}
          </Link>
        </li>
        <li className="pagination__item">
          <Link
            to={+page > totalPages - 2 ? `/catalog/${totalPages}` : `/catalog/${+page + 2}`}
            className="pagination__link"
          >
            {+page > totalPages - 2 ? totalPages : +page + 2}
          </Link>
        </li>
        <li className="pagination__item" hidden={page >= totalPages - 3}>
          ...
        </li>
        <li className="pagination__item" hidden={page >= totalPages - 2}>
          <Link to={`/catalog/${totalPages}`} className="pagination__link">
            {totalPages}
          </Link>
        </li>
      </ul>
      <Link to={page == totalPages ? "" : `/catalog/${parseInt(page) + 1}`}>
        <button className="pagination__button right">
          <i className="pagination__icon icon-arrow-down"></i>
        </button>
      </Link>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: propTypes.number.isRequired,
};

export default Pagination;
