import "./index.scss";
import logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PageNotFound = () => {
  const navigate = useNavigate();

  navigate("/404");

  useEffect(() => {
    navigate("/404");
  }, [navigate]);

  return (
    <section className="page__notfound notfound">
      <div className="notfound__container">
        <div className="notfound__body">
          <div className="notfound__maincontent">
            <div className="notfound__top">
              <img className="notfound__logo" src={logo} alt="logo.svg" />
              <h2 className="notfound__title title-2">404, ooops...</h2>
            </div>
            <div className="notfound__dropdown-wrapper">
              <p className="notfound__text text-muted">
                Sorry, but we couldnt find the page you were looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
