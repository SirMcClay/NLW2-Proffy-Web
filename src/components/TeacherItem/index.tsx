import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/52668639?s=460&v=4" alt="McClay"/>
        <div>
          <strong>McClay McCloud</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avancada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas atraves de experiencias.
      </p>

      <footer>
        <p>
          Preco/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;