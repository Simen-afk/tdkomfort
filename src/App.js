import logo from "./logo.svg";
import "./App.css";
import "./Carousel.js";
import Carousel from "./Carousel.js";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <button className="button">
            <h3>О нас</h3>
          </button>
        </div>
      </nav> */}

      {/* <h1 className="GlavniyText">Торговый Дом Комфорт</h1>
      <div className="block">Чето там о компании мы лидер тыры пыры</div>
      <div className="block">Чето там о компании мы лидер тыры пыры</div>
      <div className="block">Чето там о компании мы лидер тыры пыры</div>
      <div className="title textSleva">Новинки</div> */}
      <Navbar></Navbar>
      <div class="container">
        <h1>Торговый дом Комфорт</h1>
        <p>Красивые слова о компании.</p>
        <p>Еще больше красивых слов но не много максимум на строчку</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
                efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna
                tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                vehicula et sem eget, facilisis sodales sem.
              </div>
            </article>
          </div>
          <div className="column ">
            <article class="message is-dark">
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
                efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna
                tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                vehicula et sem eget, facilisis sodales sem.
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
            <img src={require("./riconte.png")} />
          </div>
          <div className="column is-half">
            <img src={require("./marko.png")} />
          </div>
          <div className="column">
            <img src={require("./tofa.png")} />
          </div>
          <div className="column">
            <img src={require("./almi.png")} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src={require("./niota.png")} />
          </div>
          <div className="column">
            <img src={require("./brado.png")} />
          </div>
        </div>
      </div>
      <div>
        <h2 id="contacts">Контакты</h2>
        <div className="columns">
          <div className="column ">
            <article class="message is-dark">
              <div class="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
                efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
                Donec sodales, arcu et sollicitudin porttitor, tortor urna
                tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                vehicula et sem eget, facilisis sodales sem.
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
