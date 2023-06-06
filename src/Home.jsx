import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { useNavigate, Outlet, json } from "react-router-dom";
import carousel from "./assets/home-carousel.png";
import "./index.scss";
import Card from "./components/Books/Card";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  let api = `http://13.48.147.57/book/book`;

  useEffect(() => {
    let book = [];

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 1; i < data.length; i++) {
          if (book.length !== 14) {
            book.push(data[i]);
          }
        }
        setBooks(book);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container home">
        <div className="showcase">
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

          <div className="books">
            <div className="books-card">
              {books?.length > 0
                ? books.map((item, index) => {
                    return <Card key={index} item={item} />;
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
