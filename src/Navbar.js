function Navbar() {
  return (
    <div>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation" height="3000">
        <div class="navbar-brand">
          
          <a class="navbar-item" href="https://vk.com/obuvbelorussiivspb">Торговый дом Комфорт</a>
          

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#about">О нас</a>
            <a class="navbar-item" href="#partners">Партнеры</a>
            <a class="navbar-item" href="#contacts">Контакты</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
