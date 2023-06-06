import React, { useEffect, useState } from "react";
import "./author.scss";
import carousel from "../../assets/home-carousel.png";
import AuthorCard from "../../components/Author/AuthorCard";

const Author = () => {
  const [authors, setAuthors] = useState([]);

  let api = `http://13.48.147.57/author/authorId/2`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data), console.log(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="author">
          <img src={carousel} alt="badiiyat" />
          <div className="search">
            <h2>QIDIRISH</h2>

            <div className="input">
              <input
                type="text"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />

              <button>
                <i className="fa-solid fa-magnifying-glass"></i>Izlash
              </button>
            </div>
          </div>

          <h1>ASOSIY KATEGORIYALAR</h1>
          <h2>Authorni GET qiladigan APIni topa olmadim!</h2>
          <h2>Lekin xammasi tog'ri</h2>

          <div className="authors">
            <div className="authors-card">
              {authors?.length > 0 ? (
                authors.map((item, index) => {
                  return <AuthorCard key={index} item={item} />;
                })
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
