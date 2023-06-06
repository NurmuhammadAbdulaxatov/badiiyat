import React, { useEffect, useState } from "react";
import "./user-home.scss";
import naqsh from "../../assets/user-home.png";
import kitob1 from "../../assets/kitob-1.png";
import kitob2 from "../../assets/kitob-2.png";
import kitob3 from "../../assets/kitob-3.png";
import kitob4 from "../../assets/kitob-4.png";
import audioKitob from "../../assets/audio-kitob.png";
import music from "../../assets/audio-palka.png";
import track from "../../assets/track.png";
import Card from "../../components/Books/Card";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const UserHome = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/user-home");
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
          if (book.length !== 10) {
            book.push(data[i]);
          }
        }
        setBooks(book);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="user-home">
        <div className="container">
          <div className="user-info">
            <div className="avatar">
              <img
                src="https://e0.pxfuel.com/wallpapers/684/368/desktop-wallpaper-hapebeast-prime-nft-monkey.jpg"
                alt=""
              />
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <h3>Oltin kitobxon</h3>
              <p>186 ta kitob o'qigan</p>
            </div>
            <div className="bio">
              <h1>Farruxbek Abdullayev</h1>
              <p>
                Tavallud: <span>February 08, 1999</span>
              </p>
              <p>
                Manzili: <span>Jizzax</span>
              </p>
              <p>
                Bio: <span>Graphic designer and Developer</span>
              </p>
            </div>
            <img className="naqsh" src={naqsh} alt="naqsh" />
          </div>

          <div className="user-books">
            <div className="sidebar">
              <div className="now-reading">
                <div className="sidebar-header">
                  <h4>Hozir o'qilmoqda...</h4>
                  <i className="fa-solid fa-table-cells-large"></i>
                </div>

                <div className="sidebar-body">
                  <img src={kitob1} alt="ikki eshik orasi" />
                  <img src={kitob2} alt="ikki eshik orasi" />
                  <img src={kitob3} alt="ikki eshik orasi" />
                  <img src={kitob4} alt="ikki eshik orasi" />
                  <button>Barchasini ko'rish</button>
                </div>
              </div>

              <div className="audio-book">
                <div className="sidebar-header">
                  <h4>Audio kitob</h4>
                </div>

                <div className="sidebar-body">
                  <div className="book-img">
                    <img src={audioKitob} alt="Dunyoning ishlari" />
                    <img
                      className="audio-kitob"
                      src={audioKitob}
                      alt="Dunyoning ishlari"
                    />
                    <img src={audioKitob} alt="Dunyoning ishlari" />
                  </div>

                  <h4>Dunyoning ishlari 5-track</h4>
                  <p>O'tkir Hoshimov</p>

                  <img src={music} alt="o'tkir hoshimov" />
                  <img src={track} alt="o'tkir hoshimov" />

                  <div className="music-bar">
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-backward-fast"></i>
                    <i className="fa-regular fa-circle-play"></i>
                    <i className="fa-solid fa-forward-fast"></i>
                    <i className="fa-solid fa-volume-high"></i>
                  </div>

                  <div className="audio-books">
                    <div className="kitob-audio played">
                      <img src={audioKitob} alt="Dunyoning ishlari" />
                      <div className="b-title">
                        <h4>Dunyoning ishlari 5-track</h4>
                        <p>O'tkir Hoshimov</p>
                      </div>
                    </div>
                    <div className="kitob-audio">
                      <img src={audioKitob} alt="Dunyoning ishlari" />
                      <div className="b-title">
                        <h4>Dunyoning ishlari 4-track</h4>
                        <p>O'tkir Hoshimov</p>
                      </div>
                    </div>
                    <div className="kitob-audio">
                      <img src={audioKitob} alt="Dunyoning ishlari" />
                      <div className="b-title">
                        <h4>Dunyoning ishlari 3-track</h4>
                        <p>O'tkir Hoshimov</p>
                      </div>
                    </div>
                    <div className="kitob-audio">
                      <img src={audioKitob} alt="Dunyoning ishlari" />
                      <div className="b-title">
                        <h4>Dunyoning ishlari 2-track</h4>
                        <p>O'tkir Hoshimov</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="books">
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

export default UserHome;
