import React from "react";

const AuthorCard = () => {
  return (
    <>
      <div className="author">
        {/* <img src={image} alt={title} /> */}
        <div className="card-texts">
          {/* <h3>{title}</h3> */}
          {/* <p>{description}</p> */}
          <span>
            <i className="fa-solid fa-star"></i>
            {/* {year} */}
          </span>
        </div>
      </div>
    </>
  );
};

export default AuthorCard;
