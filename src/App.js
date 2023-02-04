import "./App.css";
import "./Carousel.js";
import Carousel from "./Carousel.js";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div class="container">
        <h1>Торговый дом Комфорт</h1>
        <h2>Обувь оптом</h2>
      </div>

      <div className="carouselCentre">
        <Carousel></Carousel>
      </div>

      <div>
        <h2 id="about">О нас</h2>
        <div className="columns">
          <div className="column is-1"></div>
          <div className="column ">
            <article class="message is-dark">
              <div class="message-body">
                Наша компания занимается продажей обуви оптом производителей
                России и Белоруссии со склада в г. Санкт- Петербурге. В продаже
                модельный ряд обуви от "эконом-класса" до престижной обуви
                средне- высокого сегмента. Наша компания старается создать
                исключительно комфортные условия для работы с покупателями.
              </div>
            </article>
          </div>
          <div className="column is-1"></div>
        </div>
      </div>
      <div>
        <h2 id="partners">Партнеры</h2>
        <div className="columns">
          <div className="column">
            <img src={require("./Pictures/riconte.png")} />
          </div>
          <div className="column is-half">
            <img src={require("./Pictures/marko.png")} />
          </div>
          <div className="column">
            <img src={require("./Pictures/tofa.png")} />
          </div>
          <div className="column">
            <img src={require("./Pictures/almi.png")} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src={require("./Pictures/niota.png")} />
          </div>
          <div className="column">
            <img src={require("./Pictures/brado.png")} />
          </div>
        </div>
      </div>
      <div>
        <h2 id="contacts">Контакты</h2>
        <div className="columns">
          <div className="column ">
            <article class="message is-dark">
              <div class="message-body">
                Адрес: г. Санкт- Петербург ул. Розенштейна, дом 21,
                офис 219. Телефоны: 8( 812) 3136638, 8911-240-69-13,
                8912-240-68-54.
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
