import { NavLink, useLocation } from "react-router-dom";
import style from "./Breadcrumbs.module.scss"

export default function Breadcrumbs() {
  const location = useLocation();  

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      

      return (
        <span key={crumb}>
          <span className={style.crumb} >
            <NavLink to={currentLink}>{crumb}</NavLink>
          </span>
          <span className={style.line}></span>
        </span>
      );
    });

  return <div className={style.breadcrumbs}>{crumbs}</div>;
}
