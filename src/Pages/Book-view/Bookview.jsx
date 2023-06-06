import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Books/Card";
import "./bookview.scss";
import BookCard from "../../components/Single-book/BookCard";

const Bookview = () => {
  const [books, setBooks] = useState([]);
  const [singleItem, setSingleItem] = useState({});
  let { id } = useParams();

  let api = `http://13.48.147.57/book/genreId/${id}`;

  useEffect(() => {
    fetch(api, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, []);

  let recApi = `http://13.48.147.57/book/book`;

  useEffect(() => {
    let book = [];

    fetch(recApi)
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
      {/* <Card item={singleItem} /> */}
      <div className="container">
        {singleItem?.length > 0 ? (
          singleItem.map((item, index) => {
            return <BookCard key={index} item={item} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
        <div className="comments">
          <div className="first-comment">
            <span className="sign">''</span>
            <p className="comment-text">
              Inson bolasi ne kunlarni ko'rmaydi?! <br /> Har bir odam o'z g'ami
              bilan bo'lsa, hayotdan ko'z yumib ketganlarga umr bo'yi motam
              tutib o'tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot
              to'lqini ojizlarni qirg'oqqa irg'itib tashlaydi. Oqimga qarshi
              suza olganlar, to'lqinni egarlaganlargina ertangi kunga yetib
              keladi.
            </p>
          </div>

          <div className="second-comment">
            <span className="sign">''</span>
            <p className="comment-text">
              Yer kurrasida chumolidek mehnat qilayotganlardan ko'ra, tuproq
              tagida yotganlar ko'p. Yer qatlami odam suyaklariga to'lib ketgan.
            </p>
          </div>
        </div>

        <div className="book-recomidation">
          <div className="rec-title">
            <h3>Sizga yoqishi mumkin</h3>
            <h3 className="show-more">
              <Link to={"/"}>Barchasini ko'rish</Link>
            </h3>
          </div>

          <div className="rec-books">
            {books?.length > 0 ? (
              books.map((item, index) => {
                return <Card key={index} item={item} />;
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookview;
