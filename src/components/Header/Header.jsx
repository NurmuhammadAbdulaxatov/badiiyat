import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import headerAvatar from "../../assets/header-avatar.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-logo">
          <Link to={"/"}>
            <svg
              width="94"
              height="19"
              viewBox="0 0 94 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0766602 0.65C0.85166 0.65 1.30166 0.724999 1.30166 1.65V16.875C1.30166 17.775 0.85166 17.875 0.0766602 17.875V18H5.35166C7.27666 18 12.5267 17.875 12.5267 12.725C12.5267 8.925 8.72666 8.025 6.12666 8.2C7.80166 7.8 10.6767 6.65 10.6767 3.95C10.6767 1.6 8.57666 0.499999 5.17666 0.499999H0.0766602V0.65ZM5.27666 0.849999C6.75166 0.849999 9.45166 1.25 9.45166 4C9.45166 5.925 7.85166 7.475 4.42666 8.3L4.50166 8.75C5.00166 8.65 5.52666 8.6 6.05166 8.6C8.67666 8.6 11.3017 9.9 11.3017 12.775C11.3017 17.1 8.07666 17.65 5.12666 17.65C2.82666 17.65 2.35166 17.275 2.35166 16.875V1.65C2.35166 1.1 3.20166 0.849999 5.27666 0.849999ZM18.5688 18.35C21.8438 18.35 23.5688 16.225 24.4938 13.925V13.95C24.4938 16.975 25.3938 18.35 26.9688 18.35C28.5188 18.35 29.0188 17.125 29.0188 16.35H28.6938C28.6938 17.5 27.8938 18 27.0688 18C26.4188 18 25.5438 17.725 25.5438 14.425V5.15C25.5438 3 24.3188 0.149999 20.0688 0.149999C17.9188 0.149999 15.3938 1.075 14.4438 3.3L15.5438 3.65C16.3188 1.45 18.3938 0.499999 20.1438 0.499999C24.0938 0.499999 24.4938 3.4 24.4938 5.575V6.9C21.0688 6.9 13.5688 7.475 13.5688 13.6C13.5688 16.525 15.6938 18.35 18.5688 18.35ZM24.4938 7.125V9.025C24.4938 10.925 24.1688 18 18.5688 18C16.3188 18 14.6188 16.625 14.6188 13.6C14.6188 8.125 21.0188 7.125 24.4938 7.125ZM29.6362 0.499999V0.624999C30.4112 0.624999 30.8612 0.724999 30.8612 1.625V16.875C30.8612 17.775 30.4112 17.875 29.6362 17.875V18H34.7362C41.1862 18 43.8862 13.725 43.8862 8.45C43.8862 2.85 40.9612 0.149999 37.1862 0.149999C34.7112 0.149999 32.7112 1.7 31.9112 3.475V1.55C31.9112 0.974999 31.4362 0.499999 30.8612 0.499999H29.6362ZM31.9112 5.25C31.9112 3.15 34.0862 0.499999 37.0862 0.499999C40.6612 0.499999 42.6612 3.075 42.6612 8.45C42.6612 16.225 38.4112 17.65 34.8362 17.65C32.7612 17.65 31.9112 17.4 31.9112 16.875V5.25ZM45.0229 18H48.5229V17.875C47.7479 17.875 47.2979 17.775 47.2979 16.875V4.45C47.2979 3.85 46.8229 3.4 46.2479 3.4H45.0229V3.525C45.7979 3.525 46.2479 3.6 46.2479 4.525V16.875C46.2479 17.775 45.7979 17.875 45.0229 17.875V18ZM45.7979 1.375C45.9229 1.9 46.4729 2.225 46.9979 2.1C47.5229 1.975 47.8479 1.45 47.7229 0.9C47.5979 0.374999 47.0729 0.0499986 46.5479 0.174999C45.9979 0.3 45.6729 0.824999 45.7979 1.375ZM50.0278 18H53.5278V17.875C52.7528 17.875 52.3028 17.775 52.3028 16.875V4.45C52.3028 3.85 51.8278 3.4 51.2528 3.4H50.0278V3.525C50.8028 3.525 51.2528 3.6 51.2528 4.525V16.875C51.2528 17.775 50.8028 17.875 50.0278 17.875V18ZM50.8028 1.375C50.9278 1.9 51.4778 2.225 52.0028 2.1C52.5278 1.975 52.8528 1.45 52.7278 0.9C52.6028 0.374999 52.0778 0.0499986 51.5528 0.174999C51.0028 0.3 50.6778 0.824999 50.8028 1.375ZM56.2827 1.625L61.1577 9.675L56.5577 17.1C56.1327 17.725 55.7827 17.875 55.0827 17.875V18H57.9327V17.875C57.1577 17.875 56.6077 17.675 57.1077 16.875L66.5327 1.625C67.0327 0.824999 67.3577 0.624999 68.1577 0.624999V0.499999H65.3077V0.624999C66.0077 0.624999 66.5077 0.799999 66.2327 1.425L61.7827 8.65L57.5077 1.625C57.0577 0.874998 57.6077 0.624999 58.3827 0.624999V0.499999H54.6577V0.624999C55.4327 0.624999 55.7827 0.824999 56.2827 1.625ZM72.4507 18.35C75.7257 18.35 77.4507 16.225 78.3757 13.925V13.95C78.3757 16.975 79.2757 18.35 80.8507 18.35C82.4007 18.35 82.9007 17.125 82.9007 16.35H82.5757C82.5757 17.5 81.7757 18 80.9507 18C80.3007 18 79.4257 17.725 79.4257 14.425V5.15C79.4257 3 78.2007 0.149999 73.9507 0.149999C71.8007 0.149999 69.2757 1.075 68.3257 3.3L69.4257 3.65C70.2007 1.45 72.2757 0.499999 74.0257 0.499999C77.9757 0.499999 78.3757 3.4 78.3757 5.575V6.9C74.9507 6.9 67.4507 7.475 67.4507 13.6C67.4507 16.525 69.5757 18.35 72.4507 18.35ZM78.3757 7.125V9.025C78.3757 10.925 78.0507 18 72.4507 18C70.2007 18 68.5007 16.625 68.5007 13.6C68.5007 8.125 74.9007 7.125 78.3757 7.125ZM82.7183 0.499999V8.5H82.8433C82.8433 0.849999 82.8433 0.849999 87.6433 0.849999V16.875C87.6433 17.775 87.1933 17.875 86.4183 17.875V18H89.9183V17.875C89.1183 17.875 88.6933 17.775 88.6933 16.875V0.849999C93.4683 0.849999 93.4683 0.849999 93.4683 8.5H93.5933V0.499999H82.7183Z"
                fill="#C9AC8C"
              />
            </svg>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Bosh sahifa</NavLink>
            </li>

            <li>
              <NavLink to="/author">Authors</NavLink>
            </li>

            <li>
              <NavLink to="/">Nazm</NavLink>
            </li>

            <li>
              <NavLink to="/">Maqolalar</NavLink>
            </li>

            <li>
              <NavLink to="/">Forum</NavLink>
            </li>

            <li>
              <Link to="/login">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Link to={"/user-home"} className="header-avatar">
          <img src={headerAvatar} alt="avatar" />
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </header>
    </>
  );
};

export default Header;