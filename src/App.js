import React from 'react';
import BoxItem from './components/BoxItem';
import headerImg from './images/header-img.png';

function App() {
  return (
    <div>
      <header className="top-section">
        <div className="header-box">
          <div className="icon-box0"></div>
        </div>
        <div className="header-box">
          <div className="content-text">
            <h1>Создайте мечту с нами! <span className="emphasize">Наслаждайтесь!</span></h1>
            <p>Наша команда предлагает широкий спектр услуг. Мы делаем все качественно и ответственно. Вы не будете разочарованы!</p>
            <button className="action-btn">Узнать больше...</button>
          </div>
          <div className="img-container">
            <img src={headerImg} alt="Mobile Image" className="mobile-img" />
          </div>
        </div>
      </header>

      <section className="section-grid">
        <h2>Что Вам нужно?</h2>
        <div className="header-box-alt">
          <div className="box-group">
            <BoxItem 
              title="Первый элемент"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              iconSrc="f3"
            />
            <BoxItem 
              title="Второй элемент"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              iconSrc="f4"
            />
            <BoxItem 
              title="Третий элемент"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              iconSrc="f5"
            />
          </div>
        </div>
      </section>

      <section className="callback-form">
        <h2>Форма обратной связи</h2>
        <form action="#">
          <input type="text" placeholder="Имя" />
          <input type="email" placeholder="Электронная почта" />
          <input type="tel" placeholder="Телефон" />
          <input type="text" placeholder="Ваши вопросы?" />
          <button type="submit">Отправить запрос!</button>
        </form>
      </section>

      <footer className="footer-bar">
        <p>© Все права защищены</p>
      </footer>
    </div>
  );
}

export default App;