import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { id, title, image, description, year } = item;

  return (
    <Link to={`/bookId/${id}`}>
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-texts">
          <h3>{title}</h3>
          <p>{description}</p>
          <span>
            <i className="fa-solid fa-star"></i>
            {year}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
