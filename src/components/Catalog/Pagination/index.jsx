import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import propTypes from "prop-types";

import btnBack from "../../../assets/img/icons/btn-back.svg";

const Pagination = ({ totalPages }) => {
  const { page } = useParams();
  const { t } = useTranslation();

  return (
    totalPages != 0 && (
      <div className="products__pagination pagination">
        <Link to={page < 2 ? "" : `/catalog/${page - 1}`}>
          <button className="pagination__button left">
            <img className="pagination__icon" src={btnBack} alt="..." />
          </button>
        </Link>
        <p className="pagination__text">{t("catalog.pagination.page")}</p>
        <ul className="pagination__items">
          <li className="pagination__item">
            {page} / {totalPages}
          </li>
        </ul>
        <Link to={page == totalPages ? "" : `/catalog/${parseInt(page) + 1}`}>
          <button className="pagination__button right">
            <img className="pagination__icon" src={btnBack} alt="..." />
          </button>
        </Link>
      </div>
    )
  );
};

Pagination.propTypes = {
  totalPages: propTypes.number.isRequired,
};

export default Pagination;
