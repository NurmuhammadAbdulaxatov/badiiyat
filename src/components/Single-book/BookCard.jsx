import React from "react";
import "../../Pages/Book-view/bookview.scss";

const BookCard = ({ item }) => {
  const { image, title } = item;

  return (
    <>
      <div className="single-book">
        <div className="book-img">
          <img src={image} alt="books" />
        </div>
        <div className="book-info">
          <h1>{title}</h1>
          <p className="author">Javlon Jovliyev | 4.1</p>
          <p className="page-count">
            Sahifalar soni: <span>376</span>
          </p>
          <p className="page-count">
            Chop etilgan: <span>2021</span>
          </p>
          <p className="page-count">
            Janri: <span>Tarixiy</span>
          </p>
          <p className="page-count">
            Nashriyot <span>Nihol nashr</span>
          </p>
          <div className="more-info">
            <div className="malumot-title">
              <p>To'liq ma'lumot</p>
              <i className="fa-solid fa-arrow-down"></i>
              <span></span>
            </div>
            <div className="malumot">
              <p>
                Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган
                ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган
                миллат йигит-қизларининг хотирасига бағишланади.
                <br />
                <br />
                Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди.
                Барчаси шу қадар тиғизки, шошириб қўяди. Мажоз, образ, ифода,
                ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф
                муҳаббат, кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг
                бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар,
                руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир
                қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради. Ўтган аср
                бошида Германияда ўқиган талабалар, улар маслаги ва фожиали
                қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
              </p>
            </div>
          </div>
          <div className="formats">
            <h4>Mavjud formatlar</h4>
            <div className="format-types">
              <div className="format-book">
                <i className="fa-solid fa-book"></i>
                <p>Qog'oz kitob</p>
                <p className="format-price">27 000 so'm</p>
              </div>
              <div className="format-book">
                <i className="fa-solid fa-headphones"></i>
                <p>Audiokitob</p>
                <p className="format-price">6:23 soat</p>
              </div>
              <div className="format-book">
                <i className="fa-solid fa-mobile-screen"></i>
                <p>Elektron</p>
                <p className="format-price">pdf, epub</p>
              </div>
              <button>Javonga qo'shish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
