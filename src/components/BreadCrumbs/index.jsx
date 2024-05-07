import React from "react";
import { useLocation, Link } from "react-router-dom";
import btnBred from "../../assets/buttons/btn-bred.svg";

export const BreadСrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      const crumbText = crumb.charAt(0).toUpperCase() + crumb.slice(1);
      const isLast = index === array.length - 1;

      return (
        <React.Fragment key={crumb}>
          {index === 0 && (
            <div className="crumb">
              <Link to="/">Home</Link>
            </div>
          )}

          {!isLast && <img src={btnBred} alt="" />}

          <div className="crumb">
            <Link to={currentLink}>{crumbText}</Link>
          </div>

          {!isLast && <img src={btnBred} alt="" />}
        </React.Fragment>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default BreadСrumbs;
